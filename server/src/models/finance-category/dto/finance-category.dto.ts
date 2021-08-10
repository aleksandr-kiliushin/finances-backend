import { Field, Int, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class FinanceCategoryDto {
	@Field(type => Int)
	id: number

	@Field()
	name: string

	@Field()
	type: 'expense' | 'income'
}
