import React from 'react'

// Models
import { useAppDispatch } from '#utils/hooks'
import { deleteCategoryTc } from '#models/finance'

// Components
import { Modal } from '#components/Modal'
import { ModalHeader } from '#components/Modal/ModalHeader'
import { ModalBody } from '#components/Modal/ModalBody'
import { ModalButtonsContainer } from '#components/Modal/ModalButtonsContainer'
import { Button } from '#components/Button'

// Types
import { IFinanceCategory } from '#interfaces/finance'

export const CategoryDeletionModal = ({ category, closeModal }: IProps) => {
	const dispatch = useAppDispatch()

	const { id, name } = category

	const submitCategoryDeletion = () => {
		dispatch(deleteCategoryTc({ categoryId: id }))
	}

	return (
		<Modal closeModal={closeModal}>
			<ModalHeader>
				<h4>Delete category</h4>
			</ModalHeader>

			<ModalBody>
				<p>
					Are you sure you want to delete <strong>{name}</strong> category?
				</p>

				<ModalButtonsContainer>
					<Button color="light" onClick={closeModal}>
						Cancel
					</Button>
					<Button onClick={submitCategoryDeletion}>Delete</Button>
				</ModalButtonsContainer>
			</ModalBody>
		</Modal>
	)
}

interface IProps {
	category: IFinanceCategory
	closeModal: () => void
}
