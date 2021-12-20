import { Fragment, useState } from 'react'
import { css } from '@emotion/react'

import { useAppDispatch } from '#utils/hooks'
import { deleteRecordTc } from '#models/finance'
import { restoreRecordTc } from '#models/finance'
import { Svg } from '#components/Svg'
import { TableRow } from '#components/Table/TableRow'
import { TableCell } from '#components/Table/TableCell'
import { RecordModal } from '#views/records/RecordModal'
import { IFinanceCategory, IFinanceRecord } from '#interfaces/finance'

export const RecordTableRow = ({ categories, isTrash, record }: IProps) => {
  const dispatch = useAppDispatch()

  const [isRecordEditingModalShown, setIsRecordEditingModalShown] = useState(false)

  const { amount, date, category } = record

  const editOrRestoreTableCell = isTrash ? (
    <TableCell onClick={() => dispatch(restoreRecordTc({ recordId: record.id }))}>
      <Svg name="reply" />
    </TableCell>
  ) : (
    <TableCell onClick={() => setIsRecordEditingModalShown(true)}>
      <Svg name="pencil" />
    </TableCell>
  )

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
      <TableRow
        tableRowCustomCss={css`
          grid-template-columns: 23% 29% 24% 12% 12%;
        `}
      >
        <TableCell
          tableCellCustomCss={css`
            color: ${mapCategoryTypeIdToColor.get(category.type.id)};
            &::before {
              content: '${mapCategoryTypeIdToPseudoElementContent.get(category.type.id)}';
            }
          `}
        >
          {amount}
        </TableCell>
        <TableCell>{category.name}</TableCell>
        <TableCell>{date.slice(2)}</TableCell>
        {editOrRestoreTableCell}
        <TableCell onClick={() => dispatch(deleteRecordTc(record))}>
          <Svg name="trash-can" />
        </TableCell>
      </TableRow>

      {isRecordEditingModalShown && (
        <RecordModal
          categories={categories}
          closeModal={() => setIsRecordEditingModalShown(false)}
          record={record}
        />
      )}
    </Fragment>
  )
}

interface IProps {
  categories: IFinanceCategory[]
  isTrash: boolean
  record: IFinanceRecord
}
