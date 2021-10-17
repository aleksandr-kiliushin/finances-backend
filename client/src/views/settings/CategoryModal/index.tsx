import { Button } from '#components/Button'
import { Modal } from '#components/Modal'
import { ModalBody } from '#components/Modal/ModalBody'
import { ModalButtonsContainer } from '#components/Modal/ModalButtonsContainer'
import React from 'react'

export const CategoryModal = ({ closeModal }: IProps) => {
	return (
		<Modal closeModal={closeModal}>
			<ModalBody>heeh</ModalBody>

			<ModalButtonsContainer>
				<Button color="light" onClick={closeModal}>
					Cancel
				</Button>
				<Button>Submit changes</Button>
			</ModalButtonsContainer>
		</Modal>
	)
}

interface IProps {
	closeModal: () => void
}
