import React from 'react'
import { useForm } from 'react-hook-form'

// Models
import { useAppDispatch } from '#utils/hooks'
import { createRecordTc, updateRecordTc } from '#models/finance'

// Components
import { Modal } from '#components/Modal'
import { ModalHeader } from '#components/Modal/ModalHeader'
import { ModalBody } from '#components/Modal/ModalBody'
import { ModalButtonsContainer } from '#components/Modal/ModalButtonsContainer'
import { Button } from '#components/Button'
import { Form } from '#components/form-constructor/Form'
import { FormRow } from '#components/form-constructor/FormRow'
import { PlainInput } from '#components/form-constructor/PlainInput'
import { Select } from '#components/form-constructor/Select'

// Types
import { SubmitHandler } from 'react-hook-form'
import { IFinanceCategory, IFinanceRecord } from '#interfaces/finance'

export const RecordModal = ({ categories, closeModal, record }: IProps) => {
	const dispatch = useAppDispatch()

	const defaultValues = record
		? {
				amount: record.amount,
				categoryId: String(record.category.id),
				date: record.date,
		  }
		: { date: new Date().toISOString().split('T')[0] }

	const { handleSubmit, register } = useForm<IFormValues>({ defaultValues })

	const submitRecordForm: SubmitHandler<IFormValues> = ({ amount, categoryId, date }) => {
		if (record) {
			dispatch(
				updateRecordTc({
					amount: Number(amount),
					categoryId: Number(categoryId),
					date,
					recordId: record.id,
				}),
			)
		} else {
			dispatch(
				createRecordTc({
					amount: Number(amount),
					categoryId: Number(categoryId),
					date,
				}),
			)
		}

		closeModal()
	}

	return (
		<Modal closeModal={closeModal}>
			<ModalHeader>
				<h4>{record ? 'Edit record' : 'Create record'}</h4>
			</ModalHeader>

			<ModalBody>
				<Form onSubmit={handleSubmit(submitRecordForm)}>
					<FormRow label="Amount">
						<PlainInput type="number" {...register('amount', { required: true })} />
					</FormRow>
					<FormRow label="Category">
						<Select
							options={categories.map(({ id, name }) => ({ id: String(id), label: name }))}
							{...register('categoryId')}
						/>
					</FormRow>
					<FormRow label="Date">
						<PlainInput type="date" {...register('date', { required: true })} />
					</FormRow>

					<ModalButtonsContainer>
						<Button color="light" onClick={closeModal} type="button">
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
	categories: IFinanceCategory[]
	closeModal: () => void
	record: IFinanceRecord | null
}

interface IFormValues {
	amount: IFinanceRecord['amount']
	date: IFinanceRecord['date']
	categoryId: string
}
