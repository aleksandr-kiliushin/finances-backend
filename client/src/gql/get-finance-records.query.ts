import { gql, useQuery } from '@apollo/client'

// Types
import { QueryHookOptions } from '@apollo/client'
import { IFinanceRecord } from '#interfaces/finance'
import { IOrdering } from '#interfaces/common'

const GET_FINANCE_RECORDS = gql`
	query ($isTrashed: Boolean, $orderingByDate: String, $orderingById: String) {
		financeRecords(
			getFinanceRecordsArgs: {
				isTrashed: $isTrashed
				orderingByDate: $orderingByDate
				orderingById: $orderingById
			}
		) {
			amount
			category {
				id
				name
				type {
					id
					name
				}
			}
			date
			id
			isTrashed
		}
	}
`

interface IGetFinanceRecordsData {
	financeRecords: IFinanceRecord[]
}

interface IGetFinanceRecordsVars {
	isTrashed?: IFinanceRecord['isTrashed']
	orderingByDate?: IOrdering
	orderingById?: IOrdering
}

export const getFinanceRecordsQuery = (options?: QueryHookOptions) =>
	useQuery<IGetFinanceRecordsData, IGetFinanceRecordsVars>(GET_FINANCE_RECORDS, options)
