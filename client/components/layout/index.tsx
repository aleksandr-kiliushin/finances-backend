import React, { ReactNode } from 'react'

// components
import { Navbar } from 'components/navbar'

// styles
import s from './index.module.css'

export const Layout = ({ children }: IProps) => {
	return (
		<>
			<Navbar />
			<main className={s.Layout}>{children}</main>
		</>
	)
}

interface IProps {
	children: ReactNode
}