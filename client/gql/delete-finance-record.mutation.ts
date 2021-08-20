import { gql, useMutation } from '@apollo/client'

// types
import { IFinanceRecord } from '#interfaces/finance'

const DELETE_FINANCE_RECORD = gql`
	mutation ($id: Int!) {
		deleteFinanceRecord(id: $id) {
			amount
			date
			id
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

interface IDeleteFinanceRecordData {
	financeRecord: IFinanceRecord
}

interface IDeleteFinanceRecordVars {
	id: IFinanceRecord['id']
}

export const deleteFinanceRecordMutation = () =>
	useMutation<IDeleteFinanceRecordData, IDeleteFinanceRecordVars>(DELETE_FINANCE_RECORD)
