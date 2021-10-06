import { useEffect, useState } from 'react'

// Components
import { Svg } from '#lib/svg'
import { Datalist } from 'components/lib/datalist'

// Styles
import s from './index.module.css'

// Types
import { IFinanceCategory, IFinanceCategoryType } from '#interfaces/finance'

export const InputRow = ({ closeInputRow, category }: IProps) => {
	const [name, setName] = useState(category?.name ?? '')
	const [type, setType] = useState<IFinanceCategoryType | null>(category?.type ?? null)

	const [financeCategoryTypes, setFinanceCategoryTypes] = useState<IFinanceCategoryType[]>([])

	useEffect(() => {
		fetch('api/finance-category-type', {
			headers: {
				Authorization:
					'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywidXNlcm5hbWUiOiJzYXNoYSIsImlhdCI6MTYzMzQ1Nzk4OCwiZXhwIjoxNjM0MzIxOTg4fQ.aREJJltS80P33yfzdIeLIqyW3_LCpeVNC5imu1Akwo0',
			},
		})
			.then((response) => response.json())
			.then((financeCategoryTypes) => setFinanceCategoryTypes(financeCategoryTypes))
	}, [])

	const onSubmit = () => {
		if (!name || !type) {
			alert('Please, complete all fields.')
			return
		}

		const categoryData = { name, typeId: type.id }

		if (category) {
			fetch('api/finance-category/' + category.id, {
				body: JSON.stringify(categoryData),
				headers: {
					Authorization:
						'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywidXNlcm5hbWUiOiJzYXNoYSIsImlhdCI6MTYzMzQ1Nzk4OCwiZXhwIjoxNjM0MzIxOTg4fQ.aREJJltS80P33yfzdIeLIqyW3_LCpeVNC5imu1Akwo0',
					'Content-Type': 'application/json',
				},
				method: 'PATCH',
			})
		} else {
			fetch('api/finance-category/', {
				body: JSON.stringify(categoryData),
				headers: {
					Authorization:
						'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywidXNlcm5hbWUiOiJzYXNoYSIsImlhdCI6MTYzMzQ1Nzk4OCwiZXhwIjoxNjM0MzIxOTg4fQ.aREJJltS80P33yfzdIeLIqyW3_LCpeVNC5imu1Akwo0',
					'Content-Type': 'application/json',
				},
				method: 'POST',
			})
		}
		closeInputRow()
	}

	return (
		<div className={s.Row}>
			<div className={s.Cell}>
				<input onChange={(e) => setName(e.target.value)} type="text" value={name} />
			</div>

			<div className={s.Cell}>
				<Datalist
					options={financeCategoryTypes}
					renderOption={(type) => (
						<div key={type.id} onClick={() => setType(type)}>
							{type.name}
						</div>
					)}
					selectedOptionText={type?.name}
				/>
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
	category: IFinanceCategory | null
}
