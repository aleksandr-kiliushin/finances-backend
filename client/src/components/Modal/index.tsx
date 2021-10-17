import React, { ReactNode } from 'react'

// Styles
import s from './index.module.css'

export const Modal = ({ children, closeModal }: IProps) => {
	return (
		<div className={s.ModalUnderlay} onClick={closeModal}>
			<div className={s.Modal}>{children}</div>
		</div>
	)
}

interface IProps {
	children: ReactNode
	closeModal: () => void
}
