import React from 'react'

// Styles
import s from './index.module.css'

// Types
import { ReactNode } from 'react'

export const TableCell = ({ children }: IProps) => {
	return <div className={s.TableCell}>{children}</div>
}

interface IProps {
	children: ReactNode
}
