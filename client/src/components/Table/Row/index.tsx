import React from 'react'
import cx from 'classnames'

// Styles
import s from './index.module.css'

// Types
import { ReactNode } from 'react'

export const Row = ({ children, cnRow = '', isHeaderRow = false }: IProps) => {
	const cxHeaderRow = cx({
		[s.Row]: true,
		[s.Header]: isHeaderRow,
		[cnRow]: !!cnRow,
	})

	return <div className={cxHeaderRow}>{children}</div>
}

interface IProps {
	children: ReactNode
	cnRow?: string
	isHeaderRow?: boolean
}
