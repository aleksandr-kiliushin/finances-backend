import React, { forwardRef } from 'react'

// Styles
// import s from './index.module.css'

// Types
import { DetailedHTMLProps, ForwardedRef, InputHTMLAttributes } from 'react'

const SwitchInput_ = (
	{ label = '', name = '', ...rest }: IProps,
	ref: ForwardedRef<HTMLInputElement>,
) => {
	return (
		<div>
			<label htmlFor={name}>{label}</label>
			<input className={'s.SwitchInput'} name={name} ref={ref} type="checkbox" {...rest} />
		</div>
	)
}

export const SwitchInput = forwardRef(SwitchInput_)

interface ICustomProps {
	label?: string
}
type IProps = ICustomProps &
	DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
