import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export const AuthContext = createContext<IAuthContextValue>({
	authToken: '',
	setAuthToken: () => {},
})

export const AuthContextProvider = ({ children }: IAuthContextProps) => {
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

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
	const { setAuthToken } = useContext(AuthContext)
	const { push, reload } = useRouter()

	const logIn = (loginCredentials: ILoginCredentials) => {
		fetch('api/login', {
			body: JSON.stringify(loginCredentials),
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'POST',
		})
			.then((response) => response.json())
			.then(({ authToken }) => {
				if (authToken === undefined) throw new Error()

				localStorage.authToken = authToken

				push('/').then(reload)
			})
			.catch(() => {
				alert('Login failed.')
			})
	}

	const logOut = () => setAuthToken('')

	return { logIn, logOut }
}

// Types
interface IAuthContextProps {
	children: ReactNode
}
export interface ILoginCredentials {
	password: string
	username: string
}

type IAuthContextValue = {
	authToken: string
	setAuthToken: (token: string) => void
}
