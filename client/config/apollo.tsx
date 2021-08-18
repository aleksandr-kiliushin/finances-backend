import { ReactNode, useEffect, useState } from 'react'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

export const CustomApolloProvider = ({ children }: IProps) => {
	const [authToken, setAuthToken] = useState<string | null>(null)

	useEffect(() => {
		setAuthToken(localStorage.getItem('authToken'))
	}, [authToken])

	const gqlClient = new ApolloClient({
		uri: '/graphql',
		cache: new InMemoryCache(),
		headers: {
			authorization: 'Bearer ' + authToken,
		},
	})

	return <ApolloProvider client={gqlClient}>{children}</ApolloProvider>
}

interface IProps {
	children: ReactNode
}
