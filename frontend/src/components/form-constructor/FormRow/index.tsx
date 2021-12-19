import React, { ReactNode } from 'react'

import s from './index.module.css'

export const FormRow = ({ children, label, name }: IProps) => {
  return (
    <div className={s.FormRow}>
      <label htmlFor={name} className={s.Label}>
        {label}
      </label>

      {children}
    </div>
  )
}

interface IProps {
  children: ReactNode
  label: ReactNode
  name: string
}
