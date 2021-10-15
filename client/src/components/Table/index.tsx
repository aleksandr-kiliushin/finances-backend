import React, { ReactNode } from 'react'

// Styles
import s from './index.module.css'

export const Table = ({ children, title }: IProps) => {
	return (
		<div className={s.Table}>
			{!!title && <h4 className={s.TableTitle}>{title}</h4>}

			{children}
		</div>
	)
}

interface IProps {
	children: ReactNode
	title: string
}
