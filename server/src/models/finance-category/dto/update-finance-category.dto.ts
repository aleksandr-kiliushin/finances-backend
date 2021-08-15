import { Field, ID, InputType, PartialType } from '@nestjs/graphql'

import { CreateFinanceCategoryDto } from './create-finance-category.dto'

// types
import { IFinanceCategory } from '#interfaces/finance'

@InputType()
export class UpdateFinanceCategoryDto extends PartialType(CreateFinanceCategoryDto) {
	@Field(() => ID)
	id: IFinanceCategory['id']
}
