import { Field, ID, InputType, PartialType } from '@nestjs/graphql'

import { CreateFinanceRecordDto } from './create-finance-record.dto'

// types
import { IFinanceRecord } from '#interfaces/finance'

@InputType()
export class UpdateFinanceRecordDto extends PartialType(CreateFinanceRecordDto) {
	@Field(() => ID)
	id: IFinanceRecord['id']

	@Field(() => Boolean, { nullable: true })
	isTrashed?: IFinanceRecord['isTrashed']
}
