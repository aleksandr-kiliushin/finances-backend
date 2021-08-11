import { Field, Int, ObjectType } from '@nestjs/graphql'
import { FinanceCategoryDto } from '#models/finance-category/dto/finance-category.dto'

@ObjectType()
export class FinanceRecordDto {
	@Field(type => Int)
	amount: number

	@Field(type => FinanceCategoryDto)
	category: FinanceCategoryDto

	@Field()
	date: string

	@Field(type => Int)
	id: number

	@Field()
	isTrashed: boolean
}
