import { Field, Int, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class FinanceCategoryModel {
	@Field(type => Int)
	id: number

	@Field()
	name: string

	@Field()
	type: 'expence' | 'income'
}
