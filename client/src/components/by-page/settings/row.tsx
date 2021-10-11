import { useState } from 'react'

// GQL
import { deleteFinanceCategoryMutation } from '#gql/delete-finance-category.mutation'

// Components
import { Button } from '#components/lib/button'
import { Modal } from '#components/lib/modal'
import { Svg } from '#components/lib/svg'
import { InputRow } from './input-row'

// Styles
import s from './index.module.css'

// Types
import { IFinanceCategory } from '#interfaces/finance'

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
					buttons={
						<>
							<Button backgroundColor="white" onClick={() => setIsDeletionWindowShown(false)}>
								Cancel
							</Button>
							<Button
								backgroundColor="red"
								onClick={() => {
									deleteFinanceCategory({ variables: { id } })
									setIsDeletionWindowShown(false)
								}}
							>
								Delete
							</Button>
						</>
					}
				>
					The category and all its records will be deleted permanently. You will not be able to
					restore them.
				</Modal>
			)}
		</>
	)
}

interface IProps {
	category: IFinanceCategory
}
