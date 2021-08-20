import { gql, useMutation } from '@apollo/client'

// types
import { IFinanceCategory, IFinanceRecord } from '#interfaces/finance'

const UPDATE_FINANCE_RECORD = gql`
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

interface IUpdateFinanceRecordData {
	financeRecord: IFinanceRecord
}

interface IUpdateFinanceRecordVars {
	amount?: IFinanceRecord['amount']
	categoryId?: IFinanceCategory['id']
	date?: IFinanceRecord['date']
	id: IFinanceRecord['id']
	isTrashed?: IFinanceRecord['isTrashed']
}

export const updateFinanceRecordMutation = () =>
	useMutation<IUpdateFinanceRecordData, IUpdateFinanceRecordVars>(UPDATE_FINANCE_RECORD)
