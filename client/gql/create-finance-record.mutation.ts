import { gql } from '@apollo/client'

// types
import { IFinanceCategory, IFinanceRecord } from '#interfaces/finance'

export const CREATE_FINANCE_RECORD = gql`
	mutation ($amount: Int!, $categoryId: Int!, $date: String!) {
		createFinanceRecord(
			createFinanceRecordInput: { amount: $amount, categoryId: $categoryId, date: $date }
		) {
			amount
			id
			date
			category {
				id
				name
				type {
					id
					name
				}
			}
		}
	}
`

export interface ICreateFinanceRecordData {
	financeRecord: IFinanceRecord
}

export interface ICreateFinanceRecordVars {
	amount: IFinanceRecord['amount']
	categoryId: IFinanceCategory['id']
	date: IFinanceRecord['date']
}
