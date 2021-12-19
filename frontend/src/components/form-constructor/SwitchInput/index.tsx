import React, { DetailedHTMLProps, forwardRef, ForwardedRef, InputHTMLAttributes } from 'react'

import s from './index.module.css'

const SwitchInput_ = (
  { label = '', name = '', ...rest }: IProps,
  ref: ForwardedRef<HTMLInputElement>,
) => {
  return (
    <div className={s.Container}>
      <label htmlFor={name}>{label}</label>

      <div className={s.SliderContainer}>
        <input
          className={s.SwitchInput}
          id={name}
          name={name}
          ref={ref}
          type="checkbox"
          {...rest}
        />

        <div className={s.Slider} />
      </div>
    </div>
  )
}

export const SwitchInput = forwardRef(SwitchInput_)

interface ICustomProps {
  label?: string
}
type IProps = ICustomProps &
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
