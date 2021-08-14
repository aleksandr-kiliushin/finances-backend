import { gql } from '@apollo/client'

// types
import { IFinanceCategory } from '#interfaces/finance'

export const DELETE_FINANCE_CATEGORY = gql`
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

export interface IDeleteFinanceCategoryData {
	financeCategory: IFinanceCategory
}

export interface IDeleteFinanceCategoryVars {
	id: IFinanceCategory['id']
}
