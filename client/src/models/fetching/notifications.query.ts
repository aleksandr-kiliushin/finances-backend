import { INotification } from '#models/cache'
import { gql, useQuery } from '@apollo/client'

// Types
import { QueryHookOptions } from '@apollo/client'

const NOTIFICATIONS = gql`
	query {
		notifications @client
	}
`

interface INotificationsData {
	notifications: INotification[]
}

interface INotificationsVars {}

export const useNotificationsQuery = (options?: QueryHookOptions) =>
	useQuery<INotificationsData, INotificationsVars>(NOTIFICATIONS, options)
