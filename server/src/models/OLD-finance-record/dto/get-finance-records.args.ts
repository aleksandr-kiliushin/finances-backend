import { InputType, Field } from '@nestjs/graphql'

// types
import { IFinanceRecord } from '#interfaces/finance'
import { IOrdering } from '#interfaces/common'

@InputType()
export class GetFinanceRecordsArgs {
	@Field(() => Boolean, { nullable: true })
	isTrashed?: IFinanceRecord['isTrashed']

	@Field(() => String, { nullable: true, defaultValue: 'ASC' })
	orderingByDate?: IOrdering

	@Field(() => String, { nullable: true, defaultValue: 'ASC' })
	orderingById?: IOrdering
}
