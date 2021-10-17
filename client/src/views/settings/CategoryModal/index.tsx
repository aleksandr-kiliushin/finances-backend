import React from 'react'

// Components
import { Modal } from '#components/Modal'
import { ModalHeader } from '#components/Modal/ModalHeader'
import { ModalBody } from '#components/Modal/ModalBody'
import { ModalButtonsContainer } from '#components/Modal/ModalButtonsContainer'
import { Button } from '#components/Button'
import { Form } from '#components/form-constructor/Form'
import { FormRow } from '#components/form-constructor/FormRow'
import { PlainInput } from '#components/form-constructor/PlainInput'
import { RadioGroup } from '#components/form-constructor/RadioGroup'

// Types
import { IFinanceCategory } from '#interfaces/finance'

export const CategoryModal = ({ category, closeModal }: IProps) => {
	// const { register, handleSubmit, formState: { errors } } = useForm();
	// const onSubmit = data => console.log(data);
	// console.log(errors);

	// return (
	//   <form onSubmit={handleSubmit(onSubmit)}>

	//     <input {...register("Type", { required: true })} type="radio" value="Expense" />
	//     <input {...register("Type", { required: true })} type="radio" value="Income" />

	//     <input type="submit" />
	//   </form>
	// );

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
						<RadioGroup
							options={[
								{ id: 1, value: 'Expense' },
								{ id: 2, value: 'Income' },
							]}
						/>
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
