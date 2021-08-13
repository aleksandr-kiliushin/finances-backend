import { gql } from '@apollo/client'

// types
import { IFinanceCategory } from '#interfaces/finance'

export const FINANCE_CATEGORIES = gql`
	query GetFinanceCategories($ids: [Int!]) {
		financeCategories(getFinanceCategoriesArgs: { ids: $ids }) {
			id
			name
			type {
				id
				name
			}
		}
	}
`

export interface IFinanceCategoriesData {
	financeCategories: IFinanceCategory[]
}

export interface IFinanceCategoriesVars {
	ids?: IFinanceCategory['id'][]
}
