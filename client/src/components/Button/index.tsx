import React from 'react'
import cx from 'classnames'

// Styles
import s from './index.module.css'

// Types
import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react'

export const Button = ({ children, color = 'primary', ...rest }: IProps) => {
	const cxButton = cx({
		[s.Button]: true,
		[s.ButtonDanger]: color === 'danger',
		[s.ButtonLight]: color === 'light',
		[s.ButtonPrimary]: color === 'primary',
	})

	return (
		<button className={cxButton} {...rest}>
			{children}
		</button>
	)
}

type IProps = {
	color?: 'danger' | 'light' | 'primary'
	children: ReactNode
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
