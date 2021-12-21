import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

import { useAppDispatch } from '#utils/hooks'
import { deleteCategoryTc } from '#models/finance'
import { IFinanceCategory } from '#interfaces/finance'

export const CategoryDeletionModal = ({ category, closeModal }: IProps) => {
  const dispatch = useAppDispatch()

  const { id, name } = category

  const submitCategoryDeletion = () => {
    dispatch(deleteCategoryTc({ categoryId: id }))
  }

  return (
    <Dialog open onClose={closeModal}>
      <DialogTitle>Delete category</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete <strong>{name}</strong> category?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeModal}>Cancel</Button>
        <Button onClick={submitCategoryDeletion}>Delete</Button>
      </DialogActions>
    </Dialog>
  )
}

interface IProps {
  category: IFinanceCategory
  closeModal: () => void
}
