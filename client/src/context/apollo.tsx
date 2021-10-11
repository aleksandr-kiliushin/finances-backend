import { ReactNode, useContext } from 'react'
import { useRouter } from 'next/router'
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client'
import { onError } from '@apollo/client/link/error'

// Context
import { AuthContext } from './auth'

export const CustomApolloProvider = ({ children }: IProps) => {
	const { authToken, setAuthToken } = useContext(AuthContext)

	const { pathname, push } = useRouter()

	const httpLink = new HttpLink({
		headers: {
			authorization: 'Bearer ' + authToken,
		},
		uri: '/graphql/',
	})

	/** Customize response logic if server responses with Unauthorized 401 status code. */
	const logoutLink = onError(({ response }) => {
		if (response?.errors?.some((error) => error.extensions?.response.statusCode === 401)) {
			setAuthToken('')

			if (pathname !== '/login') {
				push('/login')
			}
		}
	})

	const apolloClient = new ApolloClient({
		cache: new InMemoryCache(),
		link: logoutLink.concat(httpLink),
	})

	return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
}

interface IProps {
	children: ReactNode
}
