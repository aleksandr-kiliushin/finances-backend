import { Field, InputType, Int, PartialType } from '@nestjs/graphql'

import { CreateFinanceRecordInput } from './create-finance-record.input'

// Types
import { IFinanceRecord } from '#interfaces/finance'

@InputType()
export class UpdateFinanceRecordArgs extends PartialType(CreateFinanceRecordInput) {
	@Field(() => Int)
	id: IFinanceRecord['id']

	@Field(() => Boolean, { nullable: true })
	isTrashed?: IFinanceRecord['isTrashed']
}
