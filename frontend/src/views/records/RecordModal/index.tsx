import { useForm } from 'react-hook-form'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'

import { useAppDispatch } from '#utils/hooks'
import { createRecordTc, updateRecordTc } from '#models/finance'
import { IFinanceCategory, IFinanceRecord } from '#interfaces/finance'

import { FormField, FormValues } from './form-helpers'
import RowGroup from '#components/RowGroup'

export const RecordModal = ({ categories, closeModal, record }: IProps) => {
  const dispatch = useAppDispatch()

  const defaultValues = record
    ? {
        amount: record.amount,
        categoryId: String(record.category.id),
        date: record.date,
      }
    : {
        amount: undefined,
        categoryId: undefined,
        date: new Date().toISOString().split('T')[0],
      }

  const { handleSubmit, register } = useForm<FormValues>({ defaultValues })

  const submitRecordForm = handleSubmit(({ amount, categoryId, date }) => {
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
  })

  return (
    <Dialog onClose={closeModal} open>
      <DialogTitle>Add record</DialogTitle>
      <form onSubmit={submitRecordForm}>
        <DialogContent>
          <RowGroup>
            <TextField
              fullWidth
              label="Amount"
              type="number"
              {...register(FormField.Amount, { required: true })}
            />
            <FormControl fullWidth>
              <InputLabel>Category</InputLabel>
              <Select label="Category">
                {categories.map(({ name, id }) => (
                  <MenuItem
                    key={id}
                    value={id}
                    {...register(FormField.CategoryId, { required: true })}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              fullWidth
              label="Date"
              type="date"
              {...register(FormField.Date, { required: true })}
            />
          </RowGroup>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeModal}>Cancel</Button>
          <Button type="submit">Submit</Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}

interface IProps {
  categories: IFinanceCategory[]
  closeModal: () => void
  record: IFinanceRecord | null
}
