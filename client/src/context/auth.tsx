import { createContext, ReactNode, useContext, useEffect, useState } from 'react'

// GQL
import { useLoginMutation } from '#gql/login.mutation'

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
	const [logIn, { data: loginData }] = useLoginMutation()

	const { setAuthToken } = useContext(AuthContext)

	useEffect(() => {
		if (loginData?.login.authToken) {
			setAuthToken(loginData?.login.authToken)
		}
	}, [loginData, setAuthToken])

	const logOut = () => setAuthToken('')

	return {
		logIn,
		logOut,
	}
}

// Types
interface IAuthContextProps {
	children: ReactNode
}

type IAuthContextValue = {
	authToken: string
	setAuthToken: (token: string) => void
}
