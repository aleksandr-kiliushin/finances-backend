import { gql } from '@apollo/client'

// types
import { IFinanceCategory, IFinanceRecord } from '#interfaces/finance'

export const UPDATE_FINANCE_RECORD = gql`
	mutation ($amount: Int, $categoryId: Int, $date: String, $id: Int!, $isTrashed: Boolean) {
		updateFinanceRecord(
			updateFinanceRecordInput: {
				amount: $amount
				categoryId: $categoryId
				date: $date
				id: $id
				isTrashed: $isTrashed
			}
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

export interface IUpdateFinanceRecordData {
	financeCategories: IFinanceRecord
}

export interface IUpdateFinanceRecordVars {
	amount?: IFinanceRecord['amount']
	categoryId?: IFinanceCategory['id']
	date?: IFinanceRecord['date']
	id: IFinanceRecord['id']
	isTrashed?: IFinanceRecord['isTrashed']
}
