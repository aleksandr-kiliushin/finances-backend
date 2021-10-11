import { gql, useMutation } from '@apollo/client'

// Types
import { MutationHookOptions, StoreObject } from '@apollo/client'
import { IFinanceCategory, IFinanceCategoryType } from '#interfaces/finance'

const CREATE_FINANCE_CATEGORY = gql`
	mutation ($name: String!, $typeId: Int!) {
		createFinanceCategory(createFinanceCategoryInput: { name: $name, typeId: $typeId }) {
			id
			name
			type {
				id
				name
			}
		}
	}
`

interface ICreateFinanceCategoryData {
	createFinanceCategory: StoreObject & IFinanceCategory
}

interface ICreateFinanceCategoryVars {
	name: IFinanceCategory['name']
	typeId: IFinanceCategoryType['id']
}

export const createFinanceCategoryMutation = (
	options?: MutationHookOptions<ICreateFinanceCategoryData, ICreateFinanceCategoryVars>,
) =>
	useMutation<ICreateFinanceCategoryData, ICreateFinanceCategoryVars>(CREATE_FINANCE_CATEGORY, {
		/** Update cache after category creating. */
		update: (cache, { data }) => {
			if (!data) return

			const cacheId = cache.identify(data.createFinanceCategory)

			if (!cacheId) return

			cache.modify({
				fields: {
					financeCategories: (existingFieldData, { toReference }) => {
						return [...existingFieldData, toReference(cacheId)]
					},
				},
			})
		},

		...options,
	})
