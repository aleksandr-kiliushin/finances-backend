import { gql, useQuery } from '@apollo/client'

// Types
import { QueryHookOptions } from '@apollo/client'
import { IUser } from '#interfaces/user'

const GET_CURRENT_USER_DATA = gql`
	query {
		currentUserData {
			username
			id
		}
	}
`

interface IGetCurrentUserData {
	currentUserData: Omit<IUser, 'password'>
}

interface IGetCurrentUserVars {}

export const useGetCurrentUserDataQuery = (options?: QueryHookOptions) =>
	useQuery<IGetCurrentUserData, IGetCurrentUserVars>(GET_CURRENT_USER_DATA, {
		// Standard logic here.
		...options,
	})
