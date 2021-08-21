import { gql, useMutation } from '@apollo/client'

// types
import { MutationHookOptions, StoreObject } from '@apollo/client'
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
	deleteFinanceRecord: StoreObject & IFinanceRecord
}

interface IDeleteFinanceRecordVars {
	id: IFinanceRecord['id']
}

export const deleteFinanceRecordMutation = (
	options?: MutationHookOptions<IDeleteFinanceRecordData, IDeleteFinanceRecordVars>,
) =>
	useMutation<IDeleteFinanceRecordData, IDeleteFinanceRecordVars>(DELETE_FINANCE_RECORD, {
		update: cache => {
			cache.modify({
				fields: {
					financeRecords: () => {},
				},
			})
		},
		...options,
	})
