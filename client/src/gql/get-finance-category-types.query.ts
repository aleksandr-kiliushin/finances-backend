import { gql, useQuery } from '@apollo/client'

// Types
import { IFinanceCategoryType } from '#interfaces/finance'
import { QueryHookOptions } from '@apollo/client'

const GET_FINANCE_CATEGORY_TYPES = gql`
	query ($ids: [Int!]) {
		financeCategoryTypes(ids: $ids) {
			id
			name
		}
	}
`

interface IGetFinanceCategoryTypesData {
	financeCategoryTypes: IFinanceCategoryType[]
}

interface IGetFinanceCategoryTypesVars {
	ids?: IFinanceCategoryType['id'][]
}

export const getFinanceCategoryTypesQuery = (options?: QueryHookOptions) =>
	useQuery<IGetFinanceCategoryTypesData, IGetFinanceCategoryTypesVars>(
		GET_FINANCE_CATEGORY_TYPES,
		options,
	)
