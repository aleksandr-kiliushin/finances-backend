import { useState } from 'react'
import { useMutation, useQuery } from '@apollo/client'

// gql
import { getFinanceCategoriesQuery } from '#gql/get-finance-categories.query'
import { createFinanceRecordMutation } from '#gql/create-finance-record.mutation'
import { updateFinanceRecordMutation } from '#gql/update-finance-record.mutation'

// components
import { Svg } from '#lib/svg'
import { Datalist } from 'components/lib/datalist'

// styles
import s from './index.module.css'

// types
import { IFinanceCategory, IFinanceRecord } from '#interfaces/finance'

export const InputRow = ({ closeInputRow, record }: IProps) => {
	const [amount, setAmount] = useState(record?.amount ?? '')
	const [category, setCategory] = useState<IFinanceCategory | null>(record?.category ?? null)
	const [date, setDate] = useState(record?.date ?? '')

	const { data: financeCategoriesData } = getFinanceCategoriesQuery()

	const [createFinanceRecord] = createFinanceRecordMutation()

	const [updateFinanceRecord] = updateFinanceRecordMutation()

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
			updateFinanceRecord({ variables: { ...recordData, id: record.id } })
		} else {
			createFinanceRecord({ variables: recordData })
		}

		closeInputRow()
	}

	if (!financeCategoriesData) return null

	const { financeCategories } = financeCategoriesData

	return (
		<div className={s.Row}>
			<div className={s.Cell}>
				<input onChange={e => setAmount(e.target.value)} type="number" value={amount} />
			</div>

			<div className={s.Cell}>
				<Datalist
					options={financeCategories}
					renderOption={category => (
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
				<input onChange={e => setDate(e.target.value)} type="date" value={date} />
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
