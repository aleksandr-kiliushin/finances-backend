import { gql, useQuery } from '@apollo/client'

// Types
import { QueryHookOptions } from '@apollo/client'

const IS_USER_LOGGED_IN = gql`
	query {
		isUserLoggedIn @client
	}
`

type IIsUserLoggedInData = boolean

interface IIsUserLoggedInVars {}

export const useIsUserLoggedInQuery = (options?: QueryHookOptions) =>
	useQuery<IIsUserLoggedInData, IIsUserLoggedInVars>(IS_USER_LOGGED_IN, options)
