import { gql } from '@apollo/client'

// types
import { IFinanceCategory, IFinanceCategoryType } from '#interfaces/finance'

export const UPDATE_FINANCE_CATEGORY = gql`
	mutation ($id: Int!, $name: String, $typeId: Int) {
		updateFinanceCategory(updateFinanceCategoryInput: { id: $id, name: $name, typeId: $typeId }) {
			id
			name
			type {
				id
				name
			}
		}
	}
`

export interface IUpdateFinanceCategoryData {
	financeCategory: IFinanceCategory
}

export interface IUpdateFinanceCategoryVars {
	id: IFinanceCategory['id']
	name?: IFinanceCategory['name']
	typeId?: IFinanceCategoryType['id']
}
