import { useForm } from 'react-hook-form'
import { format } from 'date-fns'
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

import RowGroup from '#components/RowGroup'
import { useAppDispatch } from '#utils/hooks'
import { createRecordTc, updateRecordTc } from '#models/finance'
import { IFinanceCategory, IFinanceRecord } from '#interfaces/finance'

import { FormField, FormValues } from './form-helpers'

export const RecordModal = ({ categories, closeModal, record }: IProps) => {
  const dispatch = useAppDispatch()

  const defaultValues = record
    ? {
        amount: record.amount,
        categoryId: record.category.id,
        date: record.date,
      }
    : {
        amount: null,
        categoryId: null,
        date: format(new Date(), 'yyyy-MM-dd'),
      }

  const { handleSubmit, register, watch } = useForm<FormValues>({ defaultValues })

  const submitRecordForm = handleSubmit(({ amount, categoryId, date }) => {
    if (amount === null) return
    if (categoryId === null) return

    const payload = {
      amount,
      categoryId,
      date,
    }

    if (record) {
      dispatch(updateRecordTc({ ...payload, id: record.id }))
    } else {
      dispatch(createRecordTc(payload))
    }

    closeModal()
  })

  console.log(watch())

  return (
    <Dialog onClose={closeModal} open>
      <DialogTitle>Add a record</DialogTitle>
      <form onSubmit={submitRecordForm}>
        <DialogContent>
          <RowGroup>
            <TextField
              fullWidth
              label="Amount"
              type="number"
              {...register(FormField.Amount, { required: true, valueAsNumber: true })}
            />
            <FormControl fullWidth>
              <InputLabel>Category</InputLabel>
              <Select
                defaultValue=""
                label="Category"
                {...register(FormField.CategoryId, { required: true })}
              >
                {categories.map(({ name, id }) => (
                  <MenuItem key={id} value={id}>
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
