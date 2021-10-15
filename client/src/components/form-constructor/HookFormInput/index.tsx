import React, { DetailedHTMLProps, ForwardedRef, forwardRef, InputHTMLAttributes } from 'react'

import s from './index.module.css'

const HookFormInput_ = (props: IProps, ref: ForwardedRef<HTMLInputElement>) => {
	return <input className={s.Input} ref={ref} {...props} />
}

export const HookFormInput = forwardRef(HookFormInput_)

type IProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
