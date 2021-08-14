import React, { useState } from 'react'
import { useMutation } from '@apollo/client'

// gql
import {
	DELETE_FINANCE_CATEGORY,
	IDeleteFinanceCategoryData,
	IDeleteFinanceCategoryVars,
} from '#gql/delete-finance-category.mutation'

// components
import { Svg } from '#lib/svg'
import { InputRow } from './input-row'

// styles
import s from './index.module.css'

// types
import { IFinanceCategory } from '#interfaces/finance'

export const Row = ({ category }: IProps) => {
	const [isEditing, setIsEditing] = useState(false)

	const { id, name, type } = category

	const [deleteFinanceCategory, { data: deleteFinanceCategoryData }] = useMutation<
		IDeleteFinanceCategoryData,
		IDeleteFinanceCategoryVars
	>(DELETE_FINANCE_CATEGORY)

	if (isEditing) {
		return <InputRow closeInputRow={() => setIsEditing(false)} category={category} />
	}

	return (
		<div className={s.Row}>
			<div className={s.Cell}>{category.name}</div>
			<div className={s.Cell}>{category.type.name}</div>
			<div className={s.Cell} onClick={() => setIsEditing(!isEditing)}>
				<Svg name="edit" />
			</div>
			<div className={s.Cell} onClick={() => deleteFinanceCategory({ variables: { id } })}>
				<Svg name="trash-can" />
			</div>
		</div>
	)
}

interface IProps {
	category: IFinanceCategory
}
