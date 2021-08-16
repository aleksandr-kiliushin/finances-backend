import { Field, InputType, Int, PartialType } from '@nestjs/graphql'

import { CreateFinanceCategoryInput } from './create-finance-category.input'

// types
import { IFinanceCategory } from '#interfaces/finance'

@InputType()
export class UpdateFinanceCategoryInput extends PartialType(CreateFinanceCategoryInput) {
	@Field(() => Int)
	id: IFinanceCategory['id']
}
