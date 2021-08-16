import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql'

import { FinanceRecordService } from './finance-record.service'
import { FinanceRecordDto } from './dto/finance-record.dto'
import { CreateFinanceRecordInput } from './dto/create-finance-record.input'
import { UpdateFinanceRecordArgs } from './dto/update-finance-record.input'
import { GetFinanceRecordsArgs } from './dto/get-finance-records.args'

@Resolver(() => FinanceRecordDto)
export class FinanceRecordResolver {
	constructor(private financeRecordService: FinanceRecordService) {}

	@Query(() => FinanceRecordDto, { name: 'financeRecord' })
	getFinanceRecord(
		@Args('id', { type: () => Int })
		id: FinanceRecordDto['id'],
	) {
		return this.financeRecordService.getFinanceRecord(id)
	}

	@Query(() => [FinanceRecordDto], { name: 'financeRecords' })
	getFinanceRecords(
		@Args('getFinanceRecordsArgs')
		getFinanceRecordsArgs: GetFinanceRecordsArgs,
	) {
		return this.financeRecordService.getFinanceRecords(getFinanceRecordsArgs)
	}

	@Mutation(() => FinanceRecordDto)
	createFinanceRecord(
		@Args('createFinanceRecordInput')
		createFinanceRecordInput: CreateFinanceRecordInput,
	) {
		return this.financeRecordService.createFinanceRecord(createFinanceRecordInput)
	}

	@Mutation(() => FinanceRecordDto)
	updateFinanceRecord(
		@Args('updateFinanceRecordInput')
		updateFinanceRecordInput: UpdateFinanceRecordArgs,
	) {
		return this.financeRecordService.updateFinanceRecord(updateFinanceRecordInput)
	}

	@Mutation(() => FinanceRecordDto)
	deleteFinanceRecord(
		@Args('id', { type: () => Int })
		id: FinanceRecordDto['id'],
	) {
		return this.financeRecordService.deleteFinanceRecord(id)
	}
}
