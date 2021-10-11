import { useState } from 'react'

// gql
import { getFinanceCategoryTypesQuery } from '#gql/get-finance-category-types.query'
import { createFinanceCategoryMutation } from '#gql/create-finance-category.mutation'
import { updateFinanceCategoryMutation } from '#gql/update-finance-category.mutation'

// Components
import { Svg } from '#components/lib/svg'
import { Datalist } from '#components/lib/datalist'

// Styles
import s from './index.module.css'

// Types
import { IFinanceCategory, IFinanceCategoryType } from '#interfaces/finance'

export const InputRow = ({ closeInputRow, category }: IProps) => {
	const [name, setName] = useState(category?.name ?? '')
	const [type, setType] = useState<IFinanceCategoryType | null>(category?.type ?? null)

	const { data: categoryTypesData } = getFinanceCategoryTypesQuery()

	const [createFinanceCategory] = createFinanceCategoryMutation()

	const [updateFinanceCategory] = updateFinanceCategoryMutation()

	const onSubmit = () => {
		if (!name || !type) {
			alert('Please, complete all fields.')
			return
		}

		const categoryData = { name, typeId: type.id }

		if (category) {
			updateFinanceCategory({ variables: { ...categoryData, id: category.id } })
		} else {
			createFinanceCategory({ variables: categoryData })
		}
		closeInputRow()
	}

	if (!categoryTypesData) return null

	const { financeCategoryTypes } = categoryTypesData

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
