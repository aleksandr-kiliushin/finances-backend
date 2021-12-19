import React from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'

import s from './index.module.css'

export const RadioGroup = ({ isRequired = false, name, options, register }: IProps) => {
  return (
    <div className={s.RadioGroup}>
      {options.map(({ id, label }) => (
        <div className={s.RadioInputAndLabelContainer} key={id}>
          <input
            id={id.toString()}
            type="radio"
            value={id}
            {...register(name, {
              required: isRequired,
            })}
          />
          <label htmlFor={id.toString()}>{label}</label>
        </div>
      ))}
    </div>
  )
}

interface IRadioInputOption {
  id: number
  label: string
}

interface IProps {
  isRequired: boolean
  name: string
  options: IRadioInputOption[]
  register: UseFormRegister<FieldValues>
}
