import { makeVar } from '@apollo/client'

// Types
import { ReactChild } from 'react'
import { InMemoryCache } from '@apollo/client'

export const isUserLoggedInVar = makeVar<boolean>(!!globalThis.localStorage?.authToken)

export const notificationListVar = makeVar<INotification[]>([])

export const cache: InMemoryCache = new InMemoryCache({
	typePolicies: {
		Query: {
			fields: {
				isUserLoggedIn: {
					read() {
						return !!globalThis.localStorage?.authToken
					},
				},
				notificationList: {
					read() {
						return notificationListVar
					},
				},
			},
		},
	},
})

export interface INotification {
	id: number
	message: ReactChild
	title: ReactChild
	type: 'error' | 'success'
}
