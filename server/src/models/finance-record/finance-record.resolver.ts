import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'

import { FinanceRecordService } from './finance-record.service'
import { FinanceRecordDto } from './dto/finance-record.dto'
import { CreateFinanceRecordInput } from './dto/create-finance-record.input'
import { UpdateFinanceRecordInput } from './dto/update-finance-record.input'

/**
 * The argument passed to the @Resolver() decorator is optional, but comes into
 * play when our graph becomes non-trivial. It's used to supply a parent object
 * used by field resolver functions as they traverse down through an object graph.
 */
@Resolver(of => FinanceRecordDto)
export class FinanceRecordResolver {
	constructor(private financeRecordService: FinanceRecordService) {}

	@Query(returns => FinanceRecordDto, { name: 'financeRecord' })
	async getFinanceRecord(
		@Args('recordId')
		recordId: number,
	) {
		return this.financeRecordService.getFinanceRecord(recordId)
	}

	@Query(returns => [FinanceRecordDto], { name: 'financeRecords' })
	async getFinanceRecords() {
		return this.financeRecordService.getFinanceRecords()
	}

	@Mutation(returns => FinanceRecordDto)
	async createFinanceRecord(
		@Args('createFinanceRecordInput')
		createFinanceRecordInput: CreateFinanceRecordInput,
	) {
		return await this.financeRecordService.createFinanceRecord(createFinanceRecordInput)
	}

	@Mutation(returns => FinanceRecordDto)
	async updateFinanceRecord(
		@Args('updateFinanceRecordInput')
		updateFinanceRecordInput: UpdateFinanceRecordInput,
	) {
		return await this.financeRecordService.updateFinanceRecord(updateFinanceRecordInput)
	}

	@Mutation(returns => FinanceRecordDto)
	async deleteFinanceRecord(
		@Args('recordId')
		recordId: number,
	) {
		return await this.financeRecordService.deleteFinanceRecord(recordId)
	}
}
