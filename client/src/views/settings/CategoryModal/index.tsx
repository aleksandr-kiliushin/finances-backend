import React from 'react'

// Components
import { Modal } from '#components/Modal'
import { ModalHeader } from '#components/Modal/ModalHeader'
import { ModalBody } from '#components/Modal/ModalBody'
import { ModalButtonsContainer } from '#components/Modal/ModalButtonsContainer'
import { Button } from '#components/Button'

// Types
import { IFinanceCategory } from '#interfaces/finance'

export const CategoryModal = ({ category, closeModal }: IProps) => {
	return (
		<Modal closeModal={closeModal}>
			<ModalHeader>
				<h4>{!!category ? 'Create category' : 'Edit category'}</h4>
			</ModalHeader>

			<ModalBody>heeh</ModalBody>

			<ModalButtonsContainer>
				<Button color="light" onClick={closeModal}>
					Cancel
				</Button>
				<Button>Submit</Button>
			</ModalButtonsContainer>
		</Modal>
	)
}

interface IProps {
	category: IFinanceCategory | null
	closeModal: () => void
}
