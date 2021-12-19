import React, { ReactNode } from 'react'
import cx from 'classnames'

import s from './index.module.css'

export const TableRow = ({ children, cnTableRow = '', isTableHeaderRow = false }: IProps) => {
  const cxTableHeaderRow = cx({
    [s.TableRow]: true,
    [s.TableHeaderRow]: isTableHeaderRow,
    [cnTableRow]: !!cnTableRow,
  })

  return <div className={cxTableHeaderRow}>{children}</div>
}

interface IProps {
  children: ReactNode
  cnTableRow?: string
  isTableHeaderRow?: boolean
}
