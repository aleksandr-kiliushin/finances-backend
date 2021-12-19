import React, { ReactNode } from 'react'
import cx from 'classnames'

import s from './index.module.css'

export const TableCell = ({ children, cnTableCell = '', onClick = () => {} }: IProps) => {
  const cxTableCell = cx({
    [s.TableCell]: true,
    [cnTableCell]: !!cnTableCell,
  })

  return (
    <div className={cxTableCell} onClick={onClick}>
      {children}
    </div>
  )
}

interface IProps {
  children: ReactNode
  cnTableCell?: string
  onClick?: () => void
}
