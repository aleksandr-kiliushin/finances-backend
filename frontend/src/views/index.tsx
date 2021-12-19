import React, { useEffect } from 'react'
import { Routes, useLocation } from 'react-router'
import { Navigate, Route } from 'react-router-dom'

// Action creators
import { setRedirectPath } from '#models/common'

// Components
import { Navbar } from '#components/Navbar'
import { Home } from './home'
import { Login } from './login'
import { Records } from './records'
import { Settings } from './settings'
import { Stats } from './stats'

// Utils
import { useAppDispatch, useAppSelector } from '#utils/hooks'

// Styles
import s from './index.module.css'
import { getCurrentUserData } from '#models/user'

export const App = () => {
	const dispatch = useAppDispatch()
	const { pathname } = useLocation()

	const redirectPath = useAppSelector((state) => state.common.redirectPath)
	const { isUserLoggedIn } = useAppSelector((state) => state.user) // ToDo: Check what it is.

	useEffect(() => {
		if (redirectPath !== null) {
			dispatch(setRedirectPath(null))
		}
	}, [redirectPath])

	/** Initialize app. */
	useEffect(() => {
		dispatch(getCurrentUserData())
	}, [])

	// const cnView = isUserLoggedIn ? s.ViewWithNavbar : s.ViewWithoutNavbar
	const cnView = s.ViewWithNavbar

	if (redirectPath !== null && redirectPath !== pathname) {
		return <Navigate to={redirectPath} />
	}

	return (
		<div className={s.Layout}>
			<main className={cnView}>
				<Routes>
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
				</Routes>
			</main>

			<Navbar />
		</div>
	)
}
