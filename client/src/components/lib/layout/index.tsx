import { ReactNode } from 'react'
import cx from 'classnames'

// Components
import { Navbar } from './navbar'

// Styles
import s from './index.module.css'

export const Layout = ({ children }: IProps) => {
	const cxContainer = cx({
		[s.Container]: true,
		[s.ContainerWithoutNavbar]: !globalThis.document?.querySelector('nav'),
	})

	return (
		<div className={cxContainer}>
			<main className={s.Layout}>{children}</main>
			<Navbar />
		</div>
	)
}

interface IProps {
	children: ReactNode
}
