import { Args, Int, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'

import { FinanceCategoryService } from './finance-category.service'
import { FinanceCategoryDto } from './dto/finance-category.dto'

@Resolver(of => FinanceCategoryDto)
export class FinanceCategoryResolver {
	constructor(private financeCategoryService: FinanceCategoryService) {}

	@Query(returns => [FinanceCategoryDto], { name: 'categories' })
	getCategories(
		@Args('ids', { type: () => [Int] })
		ids: FinanceCategoryDto['id'][],
	) {
		return this.financeCategoryService.getCategories(ids)
	}

	// @Query(returns => Category)
	// category(@Args('id', { type: () => Int }) id: number) {
	// 	return this.financeService.getCategoryById(id)
	// }

	// @ResolveField('records', returns => [Record])
	// categoryRecords(@Parent() category: Category) {
	// 	const { id } = category
	// 	return this.financeService.getCategoryRecords(id)
	// }

	// @Query(returns => [Record])
	// records() {
	// 	return this.financeService.getAllRecords()
	// }
}
