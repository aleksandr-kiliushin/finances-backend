import { gql, useMutation } from '@apollo/client'

// types
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
	financeCategory: IFinanceCategory
}

interface IDeleteFinanceCategoryVars {
	id: IFinanceCategory['id']
}

export const deleteFinanceCategoryMutation = () => {
	return useMutation<IDeleteFinanceCategoryData, IDeleteFinanceCategoryVars>(
		DELETE_FINANCE_CATEGORY,
	)
}
