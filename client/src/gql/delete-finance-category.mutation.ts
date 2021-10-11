import { gql, useMutation } from '@apollo/client'

// Types
import { MutationHookOptions, StoreObject } from '@apollo/client'
import { IFinanceCategory } from '#interfaces/finance'

const DELETE_FINANCE_CATEGORY = gql`
	mutation ($id: Int!) {
		deleteFinanceCategory(id: $id) {
			id
			name
			type {
				id
				name
			}
		}
	}
`

interface IDeleteFinanceCategoryData {
	deleteFinanceCategory: StoreObject & IFinanceCategory
}

interface IDeleteFinanceCategoryVars {
	id: IFinanceCategory['id']
}

export const deleteFinanceCategoryMutation = (
	options?: MutationHookOptions<IDeleteFinanceCategoryData, IDeleteFinanceCategoryVars>,
) =>
	useMutation<IDeleteFinanceCategoryData, IDeleteFinanceCategoryVars>(DELETE_FINANCE_CATEGORY, {
		update: (cache) => {
			cache.modify({
				fields: {
					financeCategories: () => {},
				},
			})
		},
		...options,
	})
