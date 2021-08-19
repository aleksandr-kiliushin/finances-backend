import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'

// gql
import { ILoginData, ILoginVars, LOGIN } from '#gql/login.mutation'

export const authContext = createContext<IAuthContextValue>({
	authToken: '',
	setAuthToken: () => {},
})

export const AuthContext = ({ children }: IAuthContextProps) => {
	const [authToken, setAuthToken] = useState<string>('')

	const { pathname, push } = useRouter()

	/** Initialize authToken state from localStorage. */
	useEffect(() => {
		setAuthToken(localStorage.getItem('authToken') ?? '')
	}, [])

	/** Update authToken in localStorage if authToken state changes. */
	useEffect(() => {
		localStorage.setItem('authToken', authToken)
	}, [authToken])

	/** If the user is logged out, redirect to /login page. */
	useEffect(() => {
		if (!authToken && pathname !== '/login') {
			push('/login')
		}
	}, [authToken, pathname])

	const value = {
		authToken,
		setAuthToken,
	}

	return <authContext.Provider value={value}>{children}</authContext.Provider>
}

export const useAuth = () => {
	const [logIn, { data: loginData }] = useMutation<ILoginData, ILoginVars>(LOGIN)

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
