import { ReactNode } from 'react'

// Fetching
import { useIsUserLoggedInQuery } from '#models/fetching/is-user-logged-in.query'

// Components
import { Navbar } from './navbar'
import { NotificationList } from '#components/lib/notifications'

// Styles
import s from './index.module.css'

export const Layout = ({ children }: IProps) => {
	const { data: isUserLoggedIn } = useIsUserLoggedInQuery()

	const cnMain = isUserLoggedIn ? s.MainWithNavbar : s.MainWithoutNavbar

	return (
		<div className={s.Layout}>
			<main className={cnMain}>{children}</main>

			<Navbar />

			<NotificationList />
		</div>
	)
}

interface IProps {
	children: ReactNode
}
