import { IFinanceCategoryType } from '#interfaces/finance'
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CreateFinanceCategoryTypeInput } from './dto/create-finance-category-type.input'
import { FinanceCategoryTypeDto } from './dto/finance-category-type.dto'
import { UpdateFinanceCategoryTypeInput } from './dto/update-finance-category-type.input'
import { FinanceCategoryTypeService } from './finance-category-type.service'

@Resolver(() => FinanceCategoryTypeDto)
export class FinanceCategoryTypeResolver {
	constructor(private financeCategoryTypeService: FinanceCategoryTypeService) {}

	@Query(() => FinanceCategoryTypeDto, { name: 'financeCategoryType' })
	getFinanceCategoryType(
		@Args('id', { type: () => [Int] })
		id: FinanceCategoryTypeDto['id'],
	) {
		return this.financeCategoryTypeService.getFinanceCategoryType(id)
	}

	@Query(() => [FinanceCategoryTypeDto], { name: 'financeCategoryTypes' })
	getFinanceCategoryTypes(
		@Args('ids', { type: () => [Int], nullable: true })
		ids?: FinanceCategoryTypeDto['id'][],
	) {
		return this.financeCategoryTypeService.getFinanceCategoryTypes(ids)
	}

	@Mutation(() => FinanceCategoryTypeDto)
	createFinanceCategoryType(
		@Args('createFinanceCategoryTypeInput')
		createFinanceCategoryTypeInput: CreateFinanceCategoryTypeInput,
	) {
		return this.financeCategoryTypeService.createFinanceCategoryType(createFinanceCategoryTypeInput)
	}

	@Mutation(() => FinanceCategoryTypeDto)
	updateFinanceCategoryType(
		@Args('updateFinanceCategoryTypeInput')
		updateFinanceCategoryTypeInput: UpdateFinanceCategoryTypeInput,
	) {
		return this.financeCategoryTypeService.updateFinanceCategoryType(updateFinanceCategoryTypeInput)
	}

	@Mutation(() => FinanceCategoryTypeDto)
	deleteFinanceCategoryType(
		@Args('id', { type: () => Int })
		id: IFinanceCategoryType['id'],
	) {
		return this.financeCategoryTypeService.deleteFinanceCategoryType(id)
	}
}
