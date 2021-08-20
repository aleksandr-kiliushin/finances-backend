import { gql, useMutation } from '@apollo/client'

// types
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
	financeCategory: IFinanceCategory
}

interface ICreateFinanceCategoryVars {
	name: IFinanceCategory['name']
	typeId: IFinanceCategoryType['id']
}

export const createFinanceCategoryMutation = () =>
	useMutation<ICreateFinanceCategoryData, ICreateFinanceCategoryVars>(CREATE_FINANCE_CATEGORY)
