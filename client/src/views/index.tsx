import React from 'react'
import { Switch } from 'react-router'
import { Route } from 'react-router-dom'

// Components
import { Navbar } from '#components/navbar'
import { Home } from './home'
import { Login } from './login'
import { Records } from './records'
import { Settings } from './settings'
import { Stats } from './stats'
import { Trash } from './trash'

// Styles
import s from './index.module.css'

export const App = () => {
	const cnView = !!localStorage.authToken ? s.ViewWithNavbar : s.ViewWithoutNavbar

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
					<Route path="/trash">
						<Trash />
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
