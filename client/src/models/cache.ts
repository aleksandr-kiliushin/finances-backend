import { makeVar } from '@apollo/client'

// Types
import { InMemoryCache } from '@apollo/client'

export const isLoggedInVar = makeVar<boolean>(!!globalThis.localStorage?.getItem('token'))

export const cache: InMemoryCache = new InMemoryCache({
	typePolicies: {
		Query: {
			fields: {
				isLoggedIn: {
					read() {
						return isLoggedInVar()
					},
				},
			},
		},
	},
})
