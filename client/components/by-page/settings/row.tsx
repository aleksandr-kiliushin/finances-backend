import { useState } from 'react'
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
import { Modal } from '#lib/modal'

export const Row = ({ category }: IProps) => {
	const [isEditing, setIsEditing] = useState(false)
	const [isDeletionWindowShown, setIsDeletionWindowShown] = useState(false)

	const { id, name, type } = category

	const [deleteFinanceCategory, { data: deleteFinanceCategoryData }] = useMutation<
		IDeleteFinanceCategoryData,
		IDeleteFinanceCategoryVars
	>(DELETE_FINANCE_CATEGORY)

	if (isEditing) {
		return <InputRow closeInputRow={() => setIsEditing(false)} category={category} />
	}

	return (
		<>
			<div className={s.Row}>
				<div className={s.Cell}>{name}</div>
				<div className={s.Cell}>{type.name}</div>
				<div className={s.Cell} onClick={() => setIsEditing(!isEditing)}>
					<Svg name="edit" />
				</div>
				<div className={s.Cell} onClick={() => setIsDeletionWindowShown(true)}>
					<Svg name="trash-can" />
				</div>
			</div>

			{isDeletionWindowShown && (
				<Modal
					onCancelButtonClick={() => setIsDeletionWindowShown(false)}
					onSubmitButtonClick={() => {
						deleteFinanceCategory({ variables: { id } })
						setIsDeletionWindowShown(false)
					}}
					submitButtonText="delete"
					text="The category and all its records will be deleted permanently. You will not be able to restore them."
				/>
			)}
		</>
	)
}

interface IProps {
	category: IFinanceCategory
}
