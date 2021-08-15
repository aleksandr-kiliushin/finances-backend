import { Field, ID, Int, ObjectType } from '@nestjs/graphql'

import { FinanceCategoryDto } from '#models/finance-category/dto/finance-category.dto'

// types
import { IFinanceRecord } from '#interfaces/finance'

@ObjectType()
export class FinanceRecordDto {
	@Field(() => Int)
	amount: IFinanceRecord['amount']

	@Field(() => FinanceCategoryDto)
	category: FinanceCategoryDto

	@Field(() => String)
	date: IFinanceRecord['date']

	@Field(() => ID)
	id: IFinanceRecord['id']

	@Field(() => Boolean)
	isTrashed: IFinanceRecord['isTrashed']
}
