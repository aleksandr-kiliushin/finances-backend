import { ReactChild } from 'react'
import { useRouter } from 'next/router'
import { ApolloClient, ApolloProvider, gql, HttpLink } from '@apollo/client'
import { onError } from '@apollo/client/link/error'

// Cache
import { cache } from './cache'

// Types
import { NormalizedCacheObject } from '@apollo/client'

export const typeDefs = gql`
	extend type Query {
		isUserLoggedIn: Boolean!
		notifications: [Object]!
	}
`

export const CustomApolloProvider = ({ children }: IProps) => {
	const { pathname, push } = useRouter()

	const httpLink = new HttpLink({
		headers: {
			authorization: 'Bearer ' + globalThis.localStorage?.authToken || '',
		},
		uri: '/graphql/',
	})

	/** Customize response logic if server responses with Unauthorized 401 status code. */
	const logoutLink = onError(({ response }) => {
		if (response?.errors?.some((error) => error.extensions?.response.statusCode === 401)) {
			localStorage.authToken = ''

			cache.reset()

			if (pathname !== '/login') {
				push('/login')
			}
		}
	})

	const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
		cache: cache,
		link: logoutLink.concat(httpLink),
		typeDefs,
	})

	return <ApolloProvider client={client}>{children}</ApolloProvider>
}

interface IProps {
	children: ReactChild
}
