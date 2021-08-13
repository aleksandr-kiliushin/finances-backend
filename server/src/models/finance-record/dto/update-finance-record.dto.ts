import { InputType, Field, Int } from '@nestjs/graphql'

// types
import { IFinanceCategory, IFinanceRecord } from '#interfaces/finance'

@InputType()
export class UpdateFinanceRecordDto {
	@Field(() => Int, { nullable: true })
	amount?: IFinanceRecord['amount']

	@Field(() => Int, { nullable: true })
	categoryId?: IFinanceCategory['id']

	@Field(() => String, { nullable: true })
	date?: IFinanceRecord['date']

	@Field(() => Int!)
	id: IFinanceRecord['id']

	@Field(() => Boolean, { nullable: true })
	isTrashed?: IFinanceRecord['isTrashed']
}
