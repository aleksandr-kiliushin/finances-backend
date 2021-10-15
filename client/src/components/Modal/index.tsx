import React, { ReactChild } from 'react'

// Styles
import s from './index.module.css'

export const Modal = ({ buttons, children }: IProps) => {
	return (
		<div className={s.Modal}>
			<div className={s.Body}>{children}</div>
			<div className={s.ButtonsContainer}>{buttons}</div>
		</div>
	)
}

interface IProps {
	buttons: ReactChild
	children: ReactChild
}
