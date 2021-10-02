import { IFinanceCategoryType } from '#interfaces/finance'
import { Field, InputType, Int, PartialType } from '@nestjs/graphql'
import { CreateFinanceCategoryTypeInput } from './create-finance-category-type.input'

@InputType()
export class UpdateFinanceCategoryTypeInput extends PartialType(CreateFinanceCategoryTypeInput) {
	@Field(() => Int)
	id: IFinanceCategoryType['id']
}
