import { gql } from '@apollo/client'

// types
import { IFinanceCategory } from '#interfaces/finance'

export const GET_FINANCE_CATEGORIES = gql`
	query ($ids: [Int!]) {
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

export interface IGetFinanceCategoriesData {
	financeCategories: IFinanceCategory[]
}

export interface IGetFinanceCategoriesVars {
	ids?: IFinanceCategory['id'][]
}
