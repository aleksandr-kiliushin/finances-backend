import { ReactNode } from 'react'

// Components
import { Navbar } from './navbar'

// Styles
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
