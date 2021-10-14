import { MutationHookOptions, StoreObject } from '@apollo/client'
import { gql, useMutation } from '@apollo/client'

// Types
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

interface IUpdateFinanceRecordData {
	updateFinanceRecord: StoreObject & IFinanceRecord
}

interface IUpdateFinanceRecordVars {
	amount?: IFinanceRecord['amount']
	categoryId?: IFinanceCategory['id']
	date?: IFinanceRecord['date']
	id: IFinanceRecord['id']
	isTrashed?: IFinanceRecord['isTrashed']
}

export const useUpdateFinanceRecordMutation = (
	options?: MutationHookOptions<IUpdateFinanceRecordData, IUpdateFinanceRecordVars>,
) =>
	useMutation<IUpdateFinanceRecordData, IUpdateFinanceRecordVars>(UPDATE_FINANCE_RECORD, {
		update: (cache) => {
			cache.modify({
				fields: {
					financeRecords: () => {},
				},
			})
		},

		...options,
	})
