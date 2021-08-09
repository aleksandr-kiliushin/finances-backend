import { Field, Int, ObjectType } from '@nestjs/graphql'
import { FinanceCategoryModel } from '@models/finance-category/models/finance-category.model'

@ObjectType()
export class FinanceRecordModel {
	@Field(type => Int)
	amount: number

	@Field(type => FinanceCategoryModel)
	category: FinanceCategoryModel

	@Field()
	date: string

	@Field(type => Int)
	id: number

	@Field()
	isTrashed: boolean
}
