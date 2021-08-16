import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql'

import { FinanceCategoryService } from './finance-category.service'
import { FinanceCategoryDto } from './dto/finance-category.dto'
import { CreateFinanceCategoryInput } from './dto/create-finance-category.input'
import { UpdateFinanceCategoryInput } from './dto/update-finance-category.input'
import { GetFinanceCategoriesArgs } from './dto/get-finance-categories.args'

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
		getFinanceCategoriesArgs: GetFinanceCategoriesArgs,
	) {
		return this.financeCategoryService.getFinanceCategories(getFinanceCategoriesArgs)
	}

	@Mutation(() => FinanceCategoryDto)
	createFinanceCategory(
		@Args('createFinanceCategoryInput')
		createFinanceCategoryInput: CreateFinanceCategoryInput,
	) {
		return this.financeCategoryService.createFinanceCategory(createFinanceCategoryInput)
	}

	@Mutation(() => FinanceCategoryDto)
	updateFinanceCategory(
		@Args('updateFinanceCategoryInput')
		updateFinanceCategoryInput: UpdateFinanceCategoryInput,
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
