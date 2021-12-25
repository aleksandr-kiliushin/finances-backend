import { ChangeEvent, Fragment, useEffect, useRef, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { css } from '@emotion/react'
import Button from '@mui/material/Button'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import Typography from '@mui/material/Typography'

import { useAppDispatch, useAppSelector } from '#utils/hooks'
import { getCategoriesTc } from '#models/finance'
import { getRecordsTc } from '#models/finance'
import { Table } from '#components/Table'
import { TableHeader } from '#components/Table/TableHeader'
import { TableRow } from '#components/Table/TableRow'
import { TableCell } from '#components/Table/TableCell'
import { RecordModal } from './RecordModal'
import { RecordTableRow } from './RecordTableRow'
import { Loader } from '#components/Loader'

export const Records = () => {
  const dispatch = useAppDispatch()
  const { search } = useLocation()
  const { push } = useHistory()

  const query = new URLSearchParams(search)
  const isTrash = query.get('isTrash') === 'true'

  const [isRecordCreatingModalShown, setIsRecordCreatingModalShown] = useState(false)

  const categories = useAppSelector((state) => state.finance.categories)
  const records = useAppSelector(
    (state) => state.finance.records[isTrash ? 'trashed' : 'notTrashed'],
  )

  const loaderRef = useRef(null)

  useEffect(() => {
    dispatch(getCategoriesTc())
    dispatch(getRecordsTc({ isTrash: false }))
    dispatch(getRecordsTc({ isTrash: true }))
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(() => dispatch(getRecordsTc({ isTrash })))

    if (loaderRef.current !== null) {
      observer.observe(loaderRef.current)
    }

    return () => {
      if (loaderRef.current !== null) {
        observer.unobserve(loaderRef.current)
      }
    }
  }, [getRecordsTc, isTrash, loaderRef])

  const onIsTrashClick = (event: ChangeEvent<HTMLInputElement>) => {
    push(`/records?isTrash=${event.target.checked}`)
  }

  return (
    <Fragment>
      <Table>
        <TableHeader
          css={css`
            display: flex;
            align-items: center;
            justify-content: space-between;
          `}
        >
          <Typography variant="h1">Finance records</Typography>
          <FormControlLabel
            control={<Switch defaultChecked={false} onChange={onIsTrashClick} />}
            label="Trash"
            labelPlacement="start"
          />
        </TableHeader>
        <TableRow
          tableRowCustomCss={css({ gridTemplateColumns: '23% 29% 24% 24%' })}
          isTableHeaderRow
        >
          <TableCell>Amount</TableCell>
          <TableCell>Category</TableCell>
          <TableCell>Date</TableCell>
          <TableCell>
            {isTrash ? null : (
              <Button onClick={() => setIsRecordCreatingModalShown(true)} variant="outlined">
                + New
              </Button>
            )}
          </TableCell>
        </TableRow>
        {records.items.map((record) => (
          <RecordTableRow
            categories={categories.items}
            isTrash={isTrash}
            key={record.id}
            record={record}
          />
        ))}

        {records.status !== 'completed' && <Loader ref={loaderRef} />}
      </Table>

      {isRecordCreatingModalShown && (
        <RecordModal
          categories={categories.items}
          closeModal={() => setIsRecordCreatingModalShown(false)}
          record={null}
        />
      )}
    </Fragment>
  )
}

interface IFormValues {
  isTrash: boolean
}
