import { gql, useMutation } from '@apollo/client'

// types
import { IFinanceCategory, IFinanceRecord } from '#interfaces/finance'

const CREATE_FINANCE_RECORD = gql`
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

interface ICreateFinanceRecordData {
	financeRecord: IFinanceRecord
}

interface ICreateFinanceRecordVars {
	amount: IFinanceRecord['amount']
	categoryId: IFinanceCategory['id']
	date: IFinanceRecord['date']
}

export const createFinanceRecordMutation = () =>
	useMutation<ICreateFinanceRecordData, ICreateFinanceRecordVars>(CREATE_FINANCE_RECORD)
