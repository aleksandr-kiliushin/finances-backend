import { useForm } from 'react-hook-form'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import FormControlLabel from '@mui/material/FormControlLabel'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import TextField from '@mui/material/TextField'

import { IFinanceCategory, IFinanceCategoryType } from '#interfaces/finance'
import { useAppDispatch } from '#utils/hooks'
import { createCategoryTc, updateCategoryTc } from '#models/finance'

import { FormField, FormValues } from './form-helpers'

export const CategoryModal = ({ category, categoryTypes, closeModal }: Props) => {
  const dispatch = useAppDispatch()

  const defaultValues = category
    ? { name: category.name, typeId: category.type.id }
    : { name: undefined, typeId: undefined }

  const { handleSubmit, register, watch } = useForm<FormValues>({ defaultValues })

  const submitCategoryForm = handleSubmit(({ name, typeId }) => {
    if (category) {
      dispatch(updateCategoryTc({ categoryId: category.id, name, typeId: Number(typeId) }))
    } else {
      dispatch(createCategoryTc({ name, typeId: Number(typeId) }))
    }

    closeModal()
  })

  console.log(watch())

  return (
    <Dialog open onClose={closeModal}>
      <DialogTitle>{Boolean(category) ? 'Edit category' : 'Create category'}</DialogTitle>
      <form onSubmit={submitCategoryForm}>
        <DialogContent>
          <TextField label="Name" {...register(FormField.Name, { required: true })} />
          <RadioGroup>
            {categoryTypes.map(({ name, id }) => (
              <FormControlLabel
                control={<Radio />}
                key={id}
                label={name}
                value={id}
                {...register(FormField.TypeId, { required: true })}
              />
            ))}
          </RadioGroup>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeModal}>Cancel</Button>
          <Button type="submit">Submit</Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}

interface Props {
  category: IFinanceCategory | null
  categoryTypes: IFinanceCategoryType[]
  closeModal: () => void
}
