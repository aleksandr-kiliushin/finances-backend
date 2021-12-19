import React, { ReactNode } from 'react'
import cx from 'classnames'

export const ModalHeader = ({ children, cnModalHeader = '' }: IProps) => {
  const cxModalHeader = cx({
    [cnModalHeader]: !!cnModalHeader,
  })

  return <div className={cxModalHeader}>{children}</div>
}

interface IProps {
  children: ReactNode
  cnModalHeader?: string
}
