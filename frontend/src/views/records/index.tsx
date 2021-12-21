import { Fragment, useEffect, useRef, useState } from 'react'
import { css } from '@emotion/react'
import { useForm } from 'react-hook-form'
import Button from '@mui/material/Button'

import { useAppDispatch, useAppSelector } from '#utils/hooks'
import { getCategoriesTc } from '#models/finance'
import { getRecordsTc } from '#models/finance'
import { SwitchInput } from '#components/form-constructor/SwitchInput'
import { Table } from '#components/Table'
import { TableHeader } from '#components/Table/TableHeader'
import { TableRow } from '#components/Table/TableRow'
import { TableCell } from '#components/Table/TableCell'
import { RecordModal } from './RecordModal'
import { RecordTableRow } from './RecordTableRow'
import { Loader } from '#components/Loader'

export const Records = () => {
  const dispatch = useAppDispatch()

  const [isRecordCreatingModalShown, setIsRecordCreatingModalShown] = useState(false)

  const { register, watch } = useForm<IFormValues>({ defaultValues: { isTrash: false } })

  const { isTrash } = watch()

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

  return (
    <Fragment>
      <Table>
        <TableHeader
          tableHeaderCustomCss={css`
            display: flex;
            align-items: center;
            justify-content: space-between;
          `}
        >
          <h3>Finance records</h3>

          <SwitchInput label="Trashed" {...register('isTrash')} />
        </TableHeader>

        <TableRow
          tableRowCustomCss={css`
            grid-template-columns: 23% 29% 24% 24%;
          `}
          isTableHeaderRow
        >
          <TableCell>Amount</TableCell>
          <TableCell>Category</TableCell>
          <TableCell>Date</TableCell>
          <TableCell>
            <Button onClick={() => setIsRecordCreatingModalShown(true)}>+ New</Button>
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
