import React, { DetailedHTMLProps, forwardRef, ForwardedRef, InputHTMLAttributes } from 'react'

import sCommon from '#components/form-constructor/index.module.css'

const PlainInput_ = (props: IProps, ref: ForwardedRef<HTMLInputElement>) => {
  const { name } = props

  return <input className={sCommon.Input} id={name} ref={ref} {...props} />
}

export const PlainInput = forwardRef(PlainInput_)

type IProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
