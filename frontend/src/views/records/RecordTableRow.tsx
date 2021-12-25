import { Fragment, useState } from 'react'
import { css } from '@emotion/react'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'

import { useAppDispatch } from '#utils/hooks'
import { deleteRecordTc } from '#models/finance'
import { restoreRecordTc } from '#models/finance'
import { Svg } from '#components/Svg'
import { IFinanceCategory, IFinanceRecord } from '#interfaces/finance'

import RecordFormModal from './RecordFormModal'

const RecordTableRow = ({ categories, isTrash, record }: Props) => {
  const dispatch = useAppDispatch()
  const [isRecordEditingModalShown, setIsRecordEditingModalShown] = useState(false)

  const { amount, date, category } = record

  const mapIsTrashToActionCell = new Map([
    [
      false,
      <TableCell onClick={() => setIsRecordEditingModalShown(true)} width="12%">
        <Svg name="pencil" />
      </TableCell>,
    ],
    [
      true,
      <TableCell onClick={() => dispatch(restoreRecordTc({ recordId: record.id }))} width="12%">
        <Svg name="reply" />
      </TableCell>,
    ],
  ])
  const mapCategoryTypeIdToColor = new Map([
    [1, 'darkred'],
    [2, 'darkgreen'],
  ])
  const mapCategoryTypeIdToPseudoElementContent = new Map([
    [1, '-'],
    [2, '+'],
  ])

  return (
    <Fragment>
      <TableRow>
        <TableCell
          css={css`
            color: ${mapCategoryTypeIdToColor.get(category.type.id)};
            &::before {
              content: '${mapCategoryTypeIdToPseudoElementContent.get(category.type.id)}';
            }
          `}
          width="23%"
        >
          {amount}
        </TableCell>
        <TableCell width="29%">{category.name}</TableCell>
        <TableCell width="24%">{date.slice(2)}</TableCell>
        {mapIsTrashToActionCell.get(isTrash)}
        <TableCell onClick={() => dispatch(deleteRecordTc(record))} width="12%">
          <Svg name="trash-can" />
        </TableCell>
      </TableRow>
      {isRecordEditingModalShown ? (
        <RecordFormModal
          categories={categories}
          closeModal={() => setIsRecordEditingModalShown(false)}
          record={record}
        />
      ) : null}
    </Fragment>
  )
}

interface Props {
  categories: IFinanceCategory[]
  isTrash: boolean
  record: IFinanceRecord
}

export default RecordTableRow
