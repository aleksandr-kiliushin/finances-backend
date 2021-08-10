import { Args, Int, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'

import { FinanceCategoryService } from './finance-category.service'
import { FinanceCategoryDto } from './dto/finance-category.dto'

// types
import { IFinanceCategory } from '@interfaces/finance'

@Resolver(of => FinanceCategoryDto)
export class FinanceCategoryResolver {
	constructor(private financeCategoryService: FinanceCategoryService) {}

	@Query(returns => [FinanceCategoryDto], { name: 'categories' })
	async getCategories(
		@Args('ids', { type: () => [Int] })
		ids: IFinanceCategory['id'][],
	) {
		return this.financeCategoryService.getCategories(ids)
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
