import { InputType, Field, Int } from '@nestjs/graphql'

// types
import { IFinanceCategory, IFinanceRecord } from '#interfaces/finance'

@InputType()
export class CreateFinanceRecordDto {
	@Field(() => Int!)
	amount: IFinanceRecord['amount']

	@Field(() => Int!)
	categoryId: IFinanceCategory['id']

	@Field(() => String!)
	date: IFinanceRecord['date']
}
