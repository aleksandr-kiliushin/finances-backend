import { gql } from '@apollo/client'

// types
import { IFinanceRecord } from '#interfaces/finance'

export const GET_FINANCE_RECORDS = gql`
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

export interface IGetFinanceRecordsData {
	financeRecords: IFinanceRecord[]
}

export interface IGetFinanceRecordsVars {
	isTrashed?: IFinanceRecord['isTrashed']
}
