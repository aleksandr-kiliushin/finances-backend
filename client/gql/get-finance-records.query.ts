import { gql, useQuery } from '@apollo/client'

// types
import { QueryHookOptions } from '@apollo/client'
import { IFinanceRecord } from '#interfaces/finance'

const GET_FINANCE_RECORDS = gql`
	query ($isTrashed: Boolean) {
		financeRecords(getFinanceRecordsArgs: { isTrashed: $isTrashed }) {
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
}

export const getFinanceRecordsQuery = (options: QueryHookOptions) => {
	return useQuery<IGetFinanceRecordsData, IGetFinanceRecordsVars>(GET_FINANCE_RECORDS, options)
}
