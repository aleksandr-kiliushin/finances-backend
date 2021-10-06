import { useEffect, useState } from 'react'
import cx from 'classnames'

// Components
import { Svg } from '#lib/svg'
import { Datalist } from 'components/lib/datalist'

// Styles
import s from './index.module.css'

// Types
import { IFinanceCategory, IFinanceRecord } from '#interfaces/finance'

export const InputRow = ({ closeInputRow, record }: IProps) => {
	const [amount, setAmount] = useState(record?.amount ?? '')
	const [category, setCategory] = useState<IFinanceCategory | null>(record?.category ?? null)
	const [date, setDate] = useState(record?.date ?? new Date().toISOString().split('T')[0])

	const [financeCategories, setFinanceCategories] = useState<IFinanceCategory[]>([])

	useEffect(() => {
		fetch('api/finance-category', {
			headers: {
				Authorization:
					`Bearer ${localStorage.authToken}`,
			},
		})
			.then((response) => response.json())
			.then((categories) => setFinanceCategories(categories))
	}, [])

	const onSubmit = () => {
		if (!amount || !category || !date) {
			alert('Please, complete all fields.')
			return
		}

		const recordData = {
			amount: +amount,
			date,
			categoryId: category.id,
		}

		if (record) {
			fetch('api/finance-record/' + record.id, {
				body: JSON.stringify(recordData),
				headers: {
					Authorization:
						`Bearer ${localStorage.authToken}`,
					'Content-Type': 'application/json',
				},
				method: 'PATCH',
			})
		} else {
			fetch('api/finance-record/', {
				body: JSON.stringify(recordData),
				headers: {
					Authorization:
						`Bearer ${localStorage.authToken}`,
					'Content-Type': 'application/json',
				},
				method: 'POST',
			})
		}

		closeInputRow()
	}

	const cxRow = cx({
		[s.Row]: true,
		[s.AddNewRecordRow]: !record,
	})

	return (
		<div className={cxRow}>
			<div className={s.Cell}>
				<input onChange={(e) => setAmount(e.target.value)} type="number" value={amount} />
			</div>

			<div className={s.Cell}>
				<Datalist
					options={financeCategories}
					renderOption={(category) => (
						<div
							key={category.id}
							onClick={() => setCategory(category)}
							className={category.type.name === 'expense' ? s.ExpenseCategory : s.IncomeCategory}
						>
							{category.name}
						</div>
					)}
					selectedOptionText={category?.name}
				/>
			</div>

			<div className={s.Cell}>
				<input onChange={(e) => setDate(e.target.value)} type="date" value={date} />
			</div>

			<div className={s.Cell} onClick={onSubmit}>
				<Svg name="checkmark" />
			</div>

			<div className={s.Cell} onClick={() => closeInputRow()}>
				<Svg name="cross" />
			</div>
		</div>
	)
}

interface IProps {
	closeInputRow: () => void
	record: IFinanceRecord | null
}
