import React from 'react'
import { Switch } from 'react-router'
import { Route } from 'react-router-dom'

// Components
import { Home } from '#views/home'
import { Login } from '#views/login'
import { Records } from '#views/records'
import { Settings } from '#views/settings'
import { Stats } from '#views/stats'
import { Trash } from '#views/trash'

export const App = () => {
	return (
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
	)
}
