import { Field, Int, ObjectType } from '@nestjs/graphql'
import { FinanceCategoryTypeDto } from '#models/finance-category-type/dto/finance-category-type.dto'

@ObjectType()
export class FinanceCategoryDto {
	@Field(type => Int)
	id: number

	@Field()
	name: string

	@Field(type => FinanceCategoryTypeDto)
	type: FinanceCategoryTypeDto
}
