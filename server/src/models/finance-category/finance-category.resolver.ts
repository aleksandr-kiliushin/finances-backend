import { Args, Int, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'

import { FinanceCategoryService } from './finance-category.service'
import { FinanceCategoryModel } from './models/finance-category.model'

@Resolver(of => FinanceCategoryModel)
export class FinanceCategoryResolver {
	constructor(private financeCategoryService: FinanceCategoryService) {}

	@Query(returns => [FinanceCategoryModel])
	async categories() {
		return this.financeCategoryService.getCategories()
	}

	// @Query(returns => Category)
	// async category(@Args('id', { type: () => Int }) id: number) {
	// 	return this.financeService.getCategoryById(id)
	// }

	// @ResolveField('records', returns => [Record])
	// async categoryRecords(@Parent() category: Category) {
	// 	const { id } = category
	// 	return this.financeService.getCategoryRecords(id)
	// }

	// @Query(returns => [Record])
	// async records() {
	// 	return this.financeService.getAllRecords()
	// }
}
