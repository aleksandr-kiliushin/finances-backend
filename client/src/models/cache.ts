import { makeVar } from '@apollo/client'

// Types
import { InMemoryCache } from '@apollo/client'

export const isUserLoggedInVar = makeVar<boolean>(!!globalThis.localStorage?.authToken)

export const cache: InMemoryCache = new InMemoryCache({
	typePolicies: {
		Query: {
			fields: {
				isUserLoggedIn: {
					read() {
						return !!globalThis.localStorage?.authToken
					},
				},
			},
		},
	},
})
