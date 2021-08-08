import { Args, Int, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'

import { FinanceService } from './finance.service'
import { Category } from './models/category.model'
import { Record } from './models/record.model'

@Resolver(of => Category)
export class FinanceResolver {
	constructor(private financeService: FinanceService) {}

	@Query(returns => Category, { name: 'category' })
	async category(@Args('id', { type: () => Int }) id: number) {
		return this.financeService.getCategoryById(id)
	}

	@ResolveField('records', returns => [Record])
	async records(@Parent() category: Category) {
		const { id } = category
		return this.financeService.getCategoryRecords(id)
	}
}
