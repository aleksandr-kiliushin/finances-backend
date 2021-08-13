import { gql } from '@apollo/client'

// types
import { IFinanceRecord } from '#interfaces/finance'

export const DELETE_FINANCE_RECORD = gql`
	mutation ($id: Int!) {
		deleteFinanceRecord(createFinanceRecordInput: { id: $id }) {
			id
			name
			type {
				id
				name
			}
		}
	}
`

export interface IDeleteFinanceRecordData {
	financeCategory: IFinanceRecord
}

export interface IDeleteFinanceRecordVars {
	id: IFinanceRecord['id']
}
