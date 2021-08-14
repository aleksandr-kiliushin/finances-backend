import { gql } from '@apollo/client'

// types
import { IFinanceCategoryType } from '#interfaces/finance'

export const GET_FINANCE_CATEGORY_TYPES = gql`
	query ($ids: [Int!]) {
		financeCategoryTypes(ids: $ids) {
			id
			name
		}
	}
`

export interface IGetFinanceCategoryTypesData {
	financeCategoryTypes: IFinanceCategoryType[]
}

export interface IGetFinanceCategoryTypesVars {
	ids?: IFinanceCategoryType['id'][]
}
