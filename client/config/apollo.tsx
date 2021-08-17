import React, { ReactNode } from 'react'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

export const CustomApolloProvider = ({ children, authToken }: IProps) => {
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
	authToken: string | null
}
