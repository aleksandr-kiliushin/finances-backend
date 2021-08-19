import { ReactNode, useContext } from 'react'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

import { authContext } from './auth'

export const CustomApolloProvider = ({ children }: IProps) => {
	const { authToken } = useContext(authContext)

	// add check if server responses with UNAUTHORIZED

	const apolloClient = new ApolloClient({
		uri: '/graphql',
		cache: new InMemoryCache(),
		headers: {
			authorization: 'Bearer ' + authToken,
		},
	})

	return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
}

interface IProps {
	children: ReactNode
}
