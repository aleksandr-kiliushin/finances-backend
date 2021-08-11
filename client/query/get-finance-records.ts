import { gql } from '@apollo/client'

// types
import { IFinanceRecord } from '@interfaces/finance'

export const FINANCE_RECORDS = gql`
	query GetFinanceRecords($isTrashed: Boolean) {
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

export interface IFinanceRecordsData {
	financeRecords: IFinanceRecord[]
}

export interface IFinanceRecordsVars {
	isTrashed?: IFinanceRecord['isTrashed']
}
