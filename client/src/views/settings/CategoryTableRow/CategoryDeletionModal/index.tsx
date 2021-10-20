import React from 'react'

// ActionCreators
import { deleteCategoryTc } from '#models/finance'

// Components
import { Modal } from '#components/Modal'
import { ModalHeader } from '#components/Modal/ModalHeader'
import { ModalBody } from '#components/Modal/ModalBody'
import { ModalButtonsContainer } from '#components/Modal/ModalButtonsContainer'
import { Button } from '#components/Button'

// Utils
import { useAppDispatch } from '#utils/hooks'

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
				Are you sure you want to delete <code>{name}</code> category?
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
