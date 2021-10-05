import { useState } from 'react'

// gql
import { deleteFinanceCategoryMutation } from '#gql/delete-finance-category.mutation'

// Components
import { Svg } from '#lib/svg'
import { InputRow } from './input-row'

// Styles
import s from './index.module.css'

// Types
import { IFinanceCategory } from '#interfaces/finance'
import { Modal } from '#lib/modal'

export const Row = ({ category }: IProps) => {
	const [isEditing, setIsEditing] = useState(false)
	const [isDeletionWindowShown, setIsDeletionWindowShown] = useState(false)

	const { id, name, type } = category

	const [deleteFinanceCategory] = deleteFinanceCategoryMutation()

	if (isEditing) {
		return <InputRow closeInputRow={() => setIsEditing(false)} category={category} />
	}

	return (
		<>
			<div className={s.Row}>
				<div className={s.Cell}>{name}</div>
				<div className={s.Cell}>{type.name}</div>
				<div className={s.Cell} onClick={() => setIsEditing(!isEditing)}>
					<Svg name="pencil" />
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
