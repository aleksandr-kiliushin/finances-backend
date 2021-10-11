import { gql, useQuery } from '@apollo/client'

// Types
import { QueryHookOptions } from '@apollo/client'
import { IFinanceCategory } from '#interfaces/finance'

const GET_FINANCE_CATEGORIES = gql`
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

interface IGetFinanceCategoriesData {
	financeCategories: IFinanceCategory[]
}

interface IGetFinanceCategoriesVars {
	ids?: IFinanceCategory['id'][]
}

export const getFinanceCategoriesQuery = (options?: QueryHookOptions) =>
	useQuery<IGetFinanceCategoriesData, IGetFinanceCategoriesVars>(GET_FINANCE_CATEGORIES, options)
