import { gql, useMutation } from '@apollo/client'

// types
import { MutationHookOptions, StoreObject } from '@apollo/client'
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
	createFinanceRecord: StoreObject & IFinanceRecord
}

interface ICreateFinanceRecordVars {
	amount: IFinanceRecord['amount']
	categoryId: IFinanceCategory['id']
	date: IFinanceRecord['date']
}

export const createFinanceRecordMutation = (
	options: MutationHookOptions<ICreateFinanceRecordData, ICreateFinanceRecordVars>,
) =>
	useMutation<ICreateFinanceRecordData, ICreateFinanceRecordVars>(CREATE_FINANCE_RECORD, {
		/** Update cache after category creating. */
		update: (cache, { data }) => {
			if (!data) return

			const cacheId = cache.identify(data.createFinanceRecord)

			if (!cacheId) return

			cache.modify({
				fields: {
					financeRecords: (existingFieldData, { toReference }) => {
						return [...existingFieldData, toReference(cacheId)]
					},
				},
			})
		},

		...options,
	})
