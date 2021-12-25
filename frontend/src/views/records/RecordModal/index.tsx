import { SubmitHandler, useForm } from 'react-hook-form'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'

import { useAppDispatch } from '#utils/hooks'
import { createRecordTc, updateRecordTc } from '#models/finance'
import Form from '#components/form-constructor/Form'
import { FormRow } from '#components/form-constructor/FormRow'
import { PlainInput } from '#components/form-constructor/PlainInput'
import { Select } from '#components/form-constructor/Select'
import { IFinanceCategory, IFinanceRecord } from '#interfaces/finance'

export const RecordModal = ({ categories, closeModal, record }: IProps) => {
  const dispatch = useAppDispatch()

  const defaultValues = record
    ? {
        amount: record.amount,
        categoryId: String(record.category.id),
        date: record.date,
      }
    : {
        categoryId: '',
        date: new Date().toISOString().split('T')[0],
      }

  const { handleSubmit, register } = useForm<IFormValues>({ defaultValues })

  const submitRecordForm: SubmitHandler<IFormValues> = ({ amount, categoryId, date }) => {
    if (record) {
      dispatch(
        updateRecordTc({
          amount: Number(amount),
          categoryId: Number(categoryId),
          date,
          id: record.id,
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
    <Dialog open onClose={closeModal}>
      <DialogTitle>Add record</DialogTitle>
      <Form onSubmit={handleSubmit(submitRecordForm)}>
        <DialogContent>
          <FormRow label="Amount" name="amount">
            <PlainInput type="number" {...register('amount', { required: true })} />
          </FormRow>
          <FormRow label="Category" name="categoryId">
            <Select
              options={categories.map(({ id, name }) => ({ id: String(id), label: name }))}
              placeholder="Select a category ..."
              {...register('categoryId', { required: true })}
            />
          </FormRow>
          <FormRow label="Date" name="date">
            <PlainInput type="date" {...register('date', { required: true })} />
          </FormRow>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeModal}>Cancel</Button>
          <Button type="submit">Submit</Button>
        </DialogActions>
      </Form>
    </Dialog>
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
