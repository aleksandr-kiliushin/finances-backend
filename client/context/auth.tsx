import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { useMutation } from '@apollo/client'

// gql
import { loginMutation } from '#gql/login.mutation'

export const authContext = createContext<IAuthContextValue>({
	authToken: '',
	setAuthToken: () => {},
})

export const AuthContext = ({ children }: IAuthContextProps) => {
	const [authToken, setAuthToken] = useState<string>('')

	/** Initialize authToken state from localStorage. */
	useEffect(() => {
		setAuthToken(localStorage.getItem('authToken') ?? '')
	}, [])

	/** Update authToken in localStorage if authToken state changes. */
	useEffect(() => {
		localStorage.setItem('authToken', authToken)
	}, [authToken])

	const value = {
		authToken,
		setAuthToken,
	}

	return <authContext.Provider value={value}>{children}</authContext.Provider>
}

export const useAuth = () => {
	const [logIn, { data: loginData }] = loginMutation()

	const { setAuthToken } = useContext(authContext)

	useEffect(() => {
		if (loginData?.login.authToken) {
			setAuthToken(loginData?.login.authToken)
		}
	}, [loginData])

	const logOut = () => setAuthToken('')

	return {
		logIn,
		logOut,
	}
}

// types
interface IAuthContextProps {
	children: ReactNode
}

type IAuthContextValue = {
	authToken: string
	setAuthToken: (token: string) => void
}
