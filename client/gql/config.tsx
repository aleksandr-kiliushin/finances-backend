// graphql
import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
	uri: '/graphql',
	cache: new InMemoryCache(),
	headers: {
		authorization:
			'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwicGFzc3dvcmQiOiJtY3AiLCJpYXQiOjE2MjkxOTAwNTB9.sXOsGqkZBRzUu1EkiNctuLdBWx0a7asdYjoKFCgVFE0',
	},
})
