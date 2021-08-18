import { useState } from 'react'
import { useMutation, useQuery } from '@apollo/client'

// gql
import {
	GET_FINANCE_CATEGORY_TYPES,
	IGetFinanceCategoryTypesData,
	IGetFinanceCategoryTypesVars,
} from '#gql/get-finance-category-types.query'
import {
	CREATE_FINANCE_CATEGORY,
	ICreateFinanceCategoryData,
	ICreateFinanceCategoryVars,
} from '#gql/create-finance-category.mutation'
import {
	IUpdateFinanceCategoryData,
	IUpdateFinanceCategoryVars,
	UPDATE_FINANCE_CATEGORY,
} from '#gql/update-finance-category.mutation'

// components
import { Svg } from '#lib/svg'
import { Datalist } from 'components/lib/datalist'

// styles
import s from './index.module.css'

// types
import { IFinanceCategory, IFinanceCategoryType } from '#interfaces/finance'

export const InputRow = ({ closeInputRow, category }: IProps) => {
	const [name, setName] = useState(category?.name ?? '')
	const [type, setType] = useState<IFinanceCategoryType | null>(category?.type ?? null)

	const { data: categoryTypesData } = useQuery<
		IGetFinanceCategoryTypesData,
		IGetFinanceCategoryTypesVars
	>(GET_FINANCE_CATEGORY_TYPES)

	const [createFinanceCategory, { data: createdFinanceRecordData }] = useMutation<
		ICreateFinanceCategoryData,
		ICreateFinanceCategoryVars
	>(CREATE_FINANCE_CATEGORY)

	const [updateFinanceCategory, { data: updatedFinanceRecordData }] = useMutation<
		IUpdateFinanceCategoryData,
		IUpdateFinanceCategoryVars
	>(UPDATE_FINANCE_CATEGORY)

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
				<input onChange={e => setName(e.target.value)} type="text" value={name} />
			</div>

			<div className={s.Cell}>
				<Datalist
					options={financeCategoryTypes}
					renderOption={type => (
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
