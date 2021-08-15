import { IFinanceCategoryType } from '#interfaces/finance'
import { Field, ID, InputType, PartialType } from '@nestjs/graphql'
import { CreateFinanceCategoryTypeDto } from './create-finance-category-type.dto'

@InputType()
export class UpdateFinanceCategoryTypeDto extends PartialType(CreateFinanceCategoryTypeDto) {
	@Field(() => ID)
	id: IFinanceCategoryType['id']
}
