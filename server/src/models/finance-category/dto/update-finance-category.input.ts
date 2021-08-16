import { Field, ID, InputType, PartialType } from '@nestjs/graphql'

import { CreateFinanceCategoryInput } from './create-finance-category.input'

// types
import { IFinanceCategory } from '#interfaces/finance'

@InputType()
export class UpdateFinanceCategoryInput extends PartialType(CreateFinanceCategoryInput) {
	@Field(() => ID)
	id: IFinanceCategory['id']
}
