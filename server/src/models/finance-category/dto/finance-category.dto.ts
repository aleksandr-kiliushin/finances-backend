import { Field, Int, ObjectType } from '@nestjs/graphql'
import { FinanceCategoryTypeDto } from '#models/finance-category-type/dto/finance-category-type.dto'

// types
import { IFinanceCategory } from '#interfaces/finance'

@ObjectType()
export class FinanceCategoryDto {
	@Field(() => Int)
	id: IFinanceCategory['id']

	@Field(() => String)
	name: IFinanceCategory['name']

	@Field(() => FinanceCategoryTypeDto)
	type: FinanceCategoryTypeDto
}
