import { useState } from 'react'

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

	const deleteFinanceCategory = () => {
		fetch('api/finance-category/' + id, {
			headers: {
				Authorization:
					'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywidXNlcm5hbWUiOiJzYXNoYSIsImlhdCI6MTYzMzQ1Nzk4OCwiZXhwIjoxNjM0MzIxOTg4fQ.aREJJltS80P33yfzdIeLIqyW3_LCpeVNC5imu1Akwo0',
			},
			method: 'DELETE',
		})

		setIsDeletionWindowShown(false)
	}

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
					onSubmitButtonClick={deleteFinanceCategory}
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
