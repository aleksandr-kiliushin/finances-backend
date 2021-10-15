import React from 'react'

// Styles
import s from './index.module.css'

// Types
import { ReactNode } from 'react'

export const Cell = ({ children }: IProps) => {
	return <div className={s.Cell}>{children}</div>
}

interface IProps {
	children: ReactNode
}
