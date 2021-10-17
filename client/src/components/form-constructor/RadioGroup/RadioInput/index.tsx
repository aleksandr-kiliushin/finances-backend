import React, { forwardRef } from 'react'

// Styles
import s from './index.module.css'

// Types
import { DetailedHTMLProps, ForwardedRef, InputHTMLAttributes } from 'react'

const RadioInput_ = (
	{ label = '', name = '', ...rest }: IProps,
	ref: ForwardedRef<HTMLInputElement>,
) => {
	return (
		<div className={s.Container}>
			<input className={s.RadioInput} id={name} name={name} ref={ref} type="radio" {...rest} />
		</div>
	)
}

export const RadioInput = forwardRef(RadioInput_)

interface ICustomProps {
	label?: string
}
type IProps = ICustomProps &
	DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
