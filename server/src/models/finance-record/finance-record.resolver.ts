import { Args, Int, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'

import { FinanceRecordService } from './finance-record.service'
import { FinanceRecordModel } from './models/finance-record.model'
// import { Category } from './models/category.model'

/**
 * The argument passed to the @Resolver() decorator is optional, but comes into
 * play when our graph becomes non-trivial. It's used to supply a parent object
 * used by field resolver functions as they traverse down through an object graph.
 */
@Resolver(of => FinanceRecordModel)
export class FinanceRecordResolver {
	constructor(private financeService: FinanceRecordService) {}

	@Query(returns => [FinanceRecordModel])
	async records() {
		return this.financeService.getRecords()
	}
}
