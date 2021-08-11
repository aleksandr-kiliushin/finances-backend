import { Field, Int, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class FinanceCategoryTypeDto {
	@Field(type => Int)
	id: number

	@Field()
	name: string
}
