import { gql, useMutation } from '@apollo/client'

// types
import { IFinanceCategory, IFinanceCategoryType } from '#interfaces/finance'

const UPDATE_FINANCE_CATEGORY = gql`
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

interface IUpdateFinanceCategoryData {
	financeCategory: IFinanceCategory
}

interface IUpdateFinanceCategoryVars {
	id: IFinanceCategory['id']
	name?: IFinanceCategory['name']
	typeId?: IFinanceCategoryType['id']
}

export const updateFinanceCategoryMutation = () =>
	useMutation<IUpdateFinanceCategoryData, IUpdateFinanceCategoryVars>(UPDATE_FINANCE_CATEGORY)
