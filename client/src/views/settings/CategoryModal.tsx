import React from 'react'

// Components
import { Modal } from '#components/Modal'
import { ModalHeader } from '#components/Modal/ModalHeader'
import { ModalBody } from '#components/Modal/ModalBody'
import { ModalButtonsContainer } from '#components/Modal/ModalButtonsContainer'
import { Button } from '#components/Button'
import { FormRow } from '#components/form-constructor/FormRow'
import { PlainInput } from '#components/form-constructor/PlainInput'

// Types
import { IFinanceCategory } from '#interfaces/finance'
import { Form } from '#components/form-constructor/Form'

export const CategoryModal = ({ category, closeModal }: IProps) => {
	return (
		<Modal closeModal={closeModal}>
			<ModalHeader>
				<h4>{!!category ? 'Edit category' : 'Create category'}</h4>
			</ModalHeader>

			<ModalBody>
				<Form>
					<FormRow label="Name">
						<PlainInput />
					</FormRow>
					<FormRow label="Type">
						<PlainInput />
					</FormRow>
				</Form>
			</ModalBody>

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
