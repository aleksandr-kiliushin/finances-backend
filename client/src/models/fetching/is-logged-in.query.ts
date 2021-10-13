import { gql, useQuery } from '@apollo/client'

// Types
import { QueryHookOptions } from '@apollo/client'

const IS_LOGGED_IN = gql`
	query IsUserLoggedIn {
		isLoggedIn @client
	}
`

type IIsLoggedInData = boolean

interface IIsLoggedInVars {}

export const useGetFinanceRecordsQuery = (options?: QueryHookOptions) =>
	useQuery<IIsLoggedInData, IIsLoggedInVars>(IS_LOGGED_IN, options)
