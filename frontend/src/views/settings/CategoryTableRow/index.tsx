import { Fragment, useState } from 'react'
import { css } from '@emotion/react'

import { Svg } from '#components/Svg'
import { TableRow } from '#components/Table/TableRow'
import { TableCell } from '#components/Table/TableCell'
import { CategoryDeletionModal } from './CategoryDeletionModal'
import { CategoryModal } from '#views/settings/CategoryModal'
import { IFinanceCategory, IFinanceCategoryType } from '#interfaces/finance'

export const CategoryTableRow = ({ category, categoryTypes }: IProps) => {
  const [isCategoryEditingModalShown, setIsCategoryEditingModalShown] = useState(false)
  const [isCategoryDeletionModalShown, setIsCategoryDeletionModalShown] = useState(false)

  const { name, type } = category

  return (
    <Fragment>
      <TableRow
        tableRowCustomCss={css`
          grid-template-columns: 38% 38% 12% 12%;
        `}
      >
        <TableCell>{name}</TableCell>
        <TableCell>{type.name}</TableCell>
        <TableCell onClick={() => setIsCategoryEditingModalShown(true)}>
          <Svg name="pencil" />
        </TableCell>
        <TableCell onClick={() => setIsCategoryDeletionModalShown(true)}>
          <Svg name="trash-can" />
        </TableCell>
      </TableRow>

      {isCategoryEditingModalShown && (
        <CategoryModal
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

interface IProps {
  category: IFinanceCategory
  categoryTypes: IFinanceCategoryType[]
}
