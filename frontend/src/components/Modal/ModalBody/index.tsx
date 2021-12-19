import React, { ReactNode } from 'react'

import s from './index.module.css'

export const ModalBody = ({ children }: IProps) => {
  return <div className={s.ModalBody}>{children}</div>
}

interface IProps {
  children: ReactNode
}
