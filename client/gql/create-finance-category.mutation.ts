import { gql } from '@apollo/client'

// types
import { IFinanceCategory, IFinanceCategoryType } from '#interfaces/finance'

export const CREATE_FINANCE_CATEGORY = gql`
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

export interface ICreateFinanceCategoryData {
	financeCategory: IFinanceCategory
}

export interface ICreateFinanceCategoryVars {
	name: IFinanceCategory['name']
	typeId: IFinanceCategoryType['id']
}
