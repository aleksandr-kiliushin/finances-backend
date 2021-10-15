import React from 'react'
import { Switch } from 'react-router'
import { Route } from 'react-router-dom'

// Components
import { Home } from './home'
import { Login } from './login'
import { Records } from './records'
import { Settings } from './settings'
import { Stats } from './stats'
import { Trash } from './trash'

// Styles
import s from './index.module.css'

export const View = () => {
	return (
		<div className={s.View}>
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
		</div>
	)
}
