import { Args, Int, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'

import { FinanceCategoryService } from './finance-category.service'
import { FinanceCategoryDto } from './dto/finance-category.dto'
import { CreateFinanceCategoryDto } from './dto/create-finance-category.dto'
import { UpdateFinanceCategoryDto } from './dto/update-finance-category.dto'

@Resolver(of => FinanceCategoryDto)
export class FinanceCategoryResolver {
	constructor(private financeCategoryService: FinanceCategoryService) {}

	@Query(returns => FinanceCategoryDto, { name: 'financeCategory' })
	getFinanceCategory(
		@Args('id', { type: () => Int })
		id: FinanceCategoryDto['id'],
	) {
		return this.financeCategoryService.getFinanceCategory(id)
	}

	@Query(returns => [FinanceCategoryDto], { name: 'financeCategories' })
	getFinanceCategories(
		@Args('ids', { type: () => [Int] })
		ids: FinanceCategoryDto['id'][],
	) {
		return this.financeCategoryService.getFinanceCategories(ids)
	}

	@Mutation(returns => FinanceCategoryDto)
	createFinanceCategory(
		@Args('createFinanceCategoryInput')
		createFinanceCategoryInput: CreateFinanceCategoryDto,
	) {
		return this.financeCategoryService.createFinanceCategory(createFinanceCategoryInput)
	}

	@Mutation(returns => FinanceCategoryDto)
	updateFinanceCategory(
		@Args('updateFinanceCategoryInput')
		updateFinanceCategoryInput: UpdateFinanceCategoryDto,
	) {
		return this.financeCategoryService.updateFinanceCategory(updateFinanceCategoryInput)
	}

	@Mutation(returns => FinanceCategoryDto)
	deleteFinanceCategory(
		@Args('id', { type: () => Int })
		id: FinanceCategoryDto['id'],
	) {
		return this.financeCategoryService.deleteFinanceCategory(id)
	}
}
