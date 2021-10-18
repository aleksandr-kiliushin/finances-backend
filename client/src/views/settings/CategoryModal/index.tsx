import React from 'react'
import { Controller, useForm } from 'react-hook-form'

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
import { SubmitHandler } from 'react-hook-form'
import { IFinanceCategory, IFinanceCategoryType } from '#interfaces/finance'

export const CategoryModal = ({ category, categoryTypes, closeModal }: IProps) => {
	const { handleSubmit, register, watch } = useForm<IFormValues>()

	console.log(watch())

	const submitCategoryForm: SubmitHandler<IFormValues> = (formValues) => {
		console.log(formValues)
	}

	return (
		<Modal closeModal={closeModal}>
			<ModalHeader>
				<h4>{!!category ? 'Edit category' : 'Create category'}</h4>
			</ModalHeader>

			<ModalBody>
				<Form onSubmit={handleSubmit(submitCategoryForm)}>
					<FormRow label="Name">
						<PlainInput {...register('categoryName', { required: true })} />
					</FormRow>
					<FormRow label="Type">
						<RadioGroup
							isRequired
							name="categoryTypeId"
							options={categoryTypes.map(({ id, name }) => ({ id, label: name }))}
							register={register}
						/>
					</FormRow>

					<ModalButtonsContainer>
						<Button color="light" onClick={closeModal}>
							Cancel
						</Button>
						<Button type="submit">Submit</Button>
					</ModalButtonsContainer>
				</Form>
			</ModalBody>
		</Modal>
	)
}

interface IProps {
	category: IFinanceCategory | null
	categoryTypes: IFinanceCategoryType[]
	closeModal: () => void
}

interface IFormValues {
	categoryName: string
	categoryTypeId: number
}
