import { InputType, Field, Int } from '@nestjs/graphql'

// Types
import { IFinanceCategory, IFinanceRecord } from '#interfaces/finance'

@InputType()
export class CreateFinanceRecordInput {
	@Field(() => Int)
	amount: IFinanceRecord['amount']

	@Field(() => Int)
	categoryId: IFinanceCategory['id']

	@Field(() => String)
	date: IFinanceRecord['date']
}
