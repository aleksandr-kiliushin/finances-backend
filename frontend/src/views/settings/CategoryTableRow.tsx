import { Fragment, useState } from 'react'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'

import { Svg } from '#components/Svg'
import { IFinanceCategory, IFinanceCategoryType } from '#interfaces/finance'

import CategoryDeletionModal from './CategoryDeletionModal'
import CategoryFormModal from './CategoryFormModal'

const CategoryTableRow = ({ category, categoryTypes }: Props) => {
  const [isCategoryEditingModalShown, setIsCategoryEditingModalShown] = useState(false)
  const [isCategoryDeletionModalShown, setIsCategoryDeletionModalShown] = useState(false)

  const { name, type } = category

  return (
    <Fragment>
      <TableRow>
        <TableCell width="38%">{name}</TableCell>
        <TableCell width="38%">{type.name}</TableCell>
        <TableCell onClick={() => setIsCategoryEditingModalShown(true)} width="12%">
          <Svg name="pencil" />
        </TableCell>
        <TableCell onClick={() => setIsCategoryDeletionModalShown(true)} width="12%">
          <Svg name="trash-can" />
        </TableCell>
      </TableRow>
      {isCategoryEditingModalShown && (
        <CategoryFormModal
          category={category}
          categoryTypes={categoryTypes}
          closeModal={() => setIsCategoryEditingModalShown(false)}
        />
      )}
      {isCategoryDeletionModalShown && (
        <CategoryDeletionModal
          category={category}
          closeModal={() => setIsCategoryDeletionModalShown(false)}
        />
      )}
    </Fragment>
  )
}

interface Props {
  category: IFinanceCategory
  categoryTypes: IFinanceCategoryType[]
}

export default CategoryTableRow
