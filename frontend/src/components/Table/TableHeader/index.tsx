import React, { ReactNode } from 'react'
import cx from 'classnames'

import s from './index.module.css'

export const TableHeader = ({ children, cnTableHeader = '' }: IProps) => {
  const cxTableHeader = cx({
    [s.TableHeader]: true,
    [cnTableHeader]: !!cnTableHeader,
  })

  return <div className={cxTableHeader}>{children}</div>
}

interface IProps {
  children: ReactNode
  cnTableHeader?: string
}
