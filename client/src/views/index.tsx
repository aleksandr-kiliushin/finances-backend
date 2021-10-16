import React from 'react'
import { Redirect, Switch, useLocation } from 'react-router'
import { Route } from 'react-router-dom'

// Components
import { Navbar } from '#components/Navbar'
import { Home } from './home'
import { Login } from './login'
import { Records } from './records'
import { Settings } from './settings'
import { Stats } from './stats'

// Utils
import { useAppSelector } from '#utils/hooks'

// Styles
import s from './index.module.css'

export const App = () => {
	const { pathname } = useLocation()

	const isUserLoggedIn = useAppSelector((state) => state.user.isUserLoggedin)

	const cnView = isUserLoggedIn ? s.ViewWithNavbar : s.ViewWithoutNavbar

	if (pathname !== '/settings') {
		return <Redirect to="/settings" />
	}

	return (
		<div className={s.Layout}>
			<main className={cnView}>
				<Switch>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/records">
						<Records />
					</Route>
					<Route path="/settings">
						<Settings />
					</Route>
					<Route path="/stats">
						<Stats />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</main>

			<Navbar />
		</div>
	)
}
