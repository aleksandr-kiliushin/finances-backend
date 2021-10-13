import { gql, useQuery } from '@apollo/client'

// Types
import { QueryHookOptions } from '@apollo/client'

const IS_LOGGED_IN = gql`
	query IsLoggedIn {
		isLoggedIn @client
	}
`

type IIsLoggedInData = boolean

interface IIsLoggedInVars {}

export const useIsLoggedInQuery = (options?: QueryHookOptions) =>
	useQuery<IIsLoggedInData, IIsLoggedInVars>(IS_LOGGED_IN, options)
