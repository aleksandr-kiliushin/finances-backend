import { IFinanceCategoryType } from '#interfaces/finance'
import { UseGuards } from '@nestjs/common'

import { AuthGuard } from '#models/auth/auth.guard'
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CreateFinanceCategoryTypeInput } from './dto/create-finance-category-type.input'
import { FinanceCategoryTypeDto } from './dto/finance-category-type.dto'
import { UpdateFinanceCategoryTypeInput } from './dto/update-finance-category-type.input'
import { FinanceCategoryTypeService } from './finance-category-type.service'

@Resolver(() => FinanceCategoryTypeDto)
export class FinanceCategoryTypeResolver {
	constructor(private financeCategoryTypeService: FinanceCategoryTypeService) {}

	@UseGuards(new AuthGuard())
	@Query(() => FinanceCategoryTypeDto, { name: 'financeCategoryType' })
	getFinanceCategoryType(
		@Args('id', { type: () => [Int] })
		id: FinanceCategoryTypeDto['id'],
	) {
		return this.financeCategoryTypeService.getFinanceCategoryType(id)
	}

	@UseGuards(new AuthGuard())
	@Query(() => [FinanceCategoryTypeDto], { name: 'financeCategoryTypes' })
	getFinanceCategoryTypes(
		@Args('ids', { type: () => [Int], nullable: true })
		ids?: FinanceCategoryTypeDto['id'][],
	) {
		return this.financeCategoryTypeService.getFinanceCategoryTypes(ids)
	}

	@UseGuards(new AuthGuard())
	@Mutation(() => FinanceCategoryTypeDto)
	createFinanceCategoryType(
		@Args('createFinanceCategoryTypeInput')
		createFinanceCategoryTypeInput: CreateFinanceCategoryTypeInput,
	) {
		return this.financeCategoryTypeService.createFinanceCategoryType(createFinanceCategoryTypeInput)
	}

	@UseGuards(new AuthGuard())
	@Mutation(() => FinanceCategoryTypeDto)
	updateFinanceCategoryType(
		@Args('updateFinanceCategoryTypeInput')
		updateFinanceCategoryTypeInput: UpdateFinanceCategoryTypeInput,
	) {
		return this.financeCategoryTypeService.updateFinanceCategoryType(updateFinanceCategoryTypeInput)
	}

	@UseGuards(new AuthGuard())
	@Mutation(() => FinanceCategoryTypeDto)
	deleteFinanceCategoryType(
		@Args('id', { type: () => Int })
		id: IFinanceCategoryType['id'],
	) {
		return this.financeCategoryTypeService.deleteFinanceCategoryType(id)
	}
}
