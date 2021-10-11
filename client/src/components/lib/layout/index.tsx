import { ReactNode } from 'react'

// Components
import { Navbar } from './navbar'

// Styles
import s from './index.module.css'

export const Layout = ({ children }: IProps) => {
	const cnMain = globalThis.document?.querySelector('nav') ? s.MainWithNavbar : s.MainWithoutNavbar

	return (
		<div className={s.Layout}>
			<main className={cnMain}>{children}</main>
			<Navbar />
		</div>
	)
}

interface IProps {
	children: ReactNode
}
