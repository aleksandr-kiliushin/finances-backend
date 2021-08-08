import { Field, Int, ObjectType } from '@nestjs/graphql'
import { Category } from './category.model'

@ObjectType()
export class Record {
	@Field(type => Int)
	amount: number

	@Field(type => Category)
	category: Category

	@Field(type => Int)
	id: number

	@Field()
	date: string

	@Field()
	isTrashed: boolean
}
