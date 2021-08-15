import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql'

import { FinanceCategoryService } from './finance-category.service'
import { FinanceCategoryDto } from './dto/finance-category.dto'
import { CreateFinanceCategoryDto } from './dto/create-finance-category.dto'
import { UpdateFinanceCategoryDto } from './dto/update-finance-category.dto'
import { GetFinanceCategoriesDto } from './dto/get-finance-categories.dto'

@Resolver(() => FinanceCategoryDto)
export class FinanceCategoryResolver {
	constructor(private financeCategoryService: FinanceCategoryService) {}

	@Query(() => FinanceCategoryDto, { name: 'financeCategory' })
	getFinanceCategory(
		@Args('id', { type: () => Int })
		id: FinanceCategoryDto['id'],
	) {
		return this.financeCategoryService.getFinanceCategory(id)
	}

	@Query(() => [FinanceCategoryDto], { name: 'financeCategories' })
	getFinanceCategories(
		@Args('getFinanceCategoriesArgs')
		getFinanceCategoriesArgs: GetFinanceCategoriesDto,
	) {
		return this.financeCategoryService.getFinanceCategories(getFinanceCategoriesArgs)
	}

	@Mutation(() => FinanceCategoryDto)
	createFinanceCategory(
		@Args('createFinanceCategoryInput')
		createFinanceCategoryInput: CreateFinanceCategoryDto,
	) {
		return this.financeCategoryService.createFinanceCategory(createFinanceCategoryInput)
	}

	@Mutation(() => FinanceCategoryDto)
	updateFinanceCategory(
		@Args('updateFinanceCategoryInput')
		updateFinanceCategoryInput: UpdateFinanceCategoryDto,
	) {
		return this.financeCategoryService.updateFinanceCategory(updateFinanceCategoryInput)
	}

	@Mutation(() => FinanceCategoryDto)
	deleteFinanceCategory(
		@Args('id', { type: () => Int })
		id: FinanceCategoryDto['id'],
	) {
		return this.financeCategoryService.deleteFinanceCategory(id)
	}
}
