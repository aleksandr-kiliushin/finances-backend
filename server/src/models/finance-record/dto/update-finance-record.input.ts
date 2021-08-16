import { Field, ID, InputType, PartialType } from '@nestjs/graphql'

import { CreateFinanceRecordInput } from './create-finance-record.input'

// types
import { IFinanceRecord } from '#interfaces/finance'

@InputType()
export class UpdateFinanceRecordArgs extends PartialType(CreateFinanceRecordInput) {
	@Field(() => ID)
	id: IFinanceRecord['id']

	@Field(() => Boolean, { nullable: true })
	isTrashed?: IFinanceRecord['isTrashed']
}
