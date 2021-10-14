import { makeVar } from '@apollo/client'

// Types
import { InMemoryCache } from '@apollo/client'

export const isUserLoggedInVar = makeVar<boolean>(!!globalThis.localStorage?.authToken)

export const notificationsVar = makeVar<INotification[]>([
	/*
	{
		id: 1,
		message: 'New record added successfully.',
		title: 'Record added',
		type: 'success',
	},
	{
		id: 2,
		message: 'Invalid username or password.',
		title: 'Authentication error',
		type: 'error',
	},
	{
		id: 3,
		message: 'New category added successfully.',
		title: 'Category added',
		type: 'success',
	},
*/
])

export const cache: InMemoryCache = new InMemoryCache({
	typePolicies: {
		Query: {
			fields: {
				isUserLoggedIn: {
					read() {
						return !!globalThis.localStorage?.authToken
					},
				},
				notifications: {
					read() {
						return notificationsVar()
					},
				},
			},
		},
	},
})

export interface INotification {
	id: number
	message: string
	title: string
	type: 'error' | 'success'
}
