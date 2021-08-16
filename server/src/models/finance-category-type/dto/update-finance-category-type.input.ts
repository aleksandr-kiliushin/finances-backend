import { IFinanceCategoryType } from '#interfaces/finance'
import { Field, ID, InputType, PartialType } from '@nestjs/graphql'
import { CreateFinanceCategoryTypeInput } from './create-finance-category-type.input'

@InputType()
export class UpdateFinanceCategoryTypeInput extends PartialType(CreateFinanceCategoryTypeInput) {
	@Field(() => ID)
	id: IFinanceCategoryType['id']
}
