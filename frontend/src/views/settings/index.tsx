import { Fragment, useEffect, useState } from 'react'
import { css } from '@emotion/react'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import { getCategoriesTc } from '#models/finance'
import { getCategoryTypesTc } from '#models/finance'
import { Table } from '#components/Table'
import { TableHeader } from '#components/Table/TableHeader'
import { TableRow } from '#components/Table/TableRow'
import { TableCell } from '#components/Table/TableCell'
import { CategoryModal } from './CategoryModal'
import { CategoryTableRow } from './CategoryTableRow'
import { useAppDispatch, useAppSelector } from '#utils/hooks'

export const Settings = () => {
  const dispatch = useAppDispatch()
  const [isCategoryCreatingModalShown, setIsCategoryCreatingModalShown] = useState(false)

  const categories = useAppSelector((state) => state.finance.categories)
  const categoryTypes = useAppSelector((state) => state.finance.categoryTypes)

  useEffect(() => {
    dispatch(getCategoriesTc())
    dispatch(getCategoryTypesTc())
  }, [])

  return (
    <Fragment>
      <Typography variant="h1">Settings</Typography>
      <Table>
        <TableHeader>
          <Typography variant="h2">Finance categories</Typography>
        </TableHeader>

        <TableRow
          tableRowCustomCss={css`
            grid-template-columns: 38% 38% 24%;
          `}
          isTableHeaderRow
        >
          <TableCell>Category</TableCell>
          <TableCell>Type</TableCell>
          <TableCell>
            <Button onClick={() => setIsCategoryCreatingModalShown(true)} variant="outlined">
              + New
            </Button>
          </TableCell>
        </TableRow>

        {categories.items.map((category) => (
          <CategoryTableRow
            category={category}
            categoryTypes={categoryTypes.items}
            key={category.id}
          />
        ))}
      </Table>

      {isCategoryCreatingModalShown && (
        <CategoryModal
          category={null}
          categoryTypes={categoryTypes.items}
          closeModal={() => setIsCategoryCreatingModalShown(false)}
        />
      )}
    </Fragment>
  )
}
