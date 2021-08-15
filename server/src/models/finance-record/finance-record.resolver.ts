import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql'

import { FinanceRecordService } from './finance-record.service'
import { FinanceRecordDto } from './dto/finance-record.dto'
import { CreateFinanceRecordDto } from './dto/create-finance-record.dto'
import { UpdateFinanceRecordDto } from './dto/update-finance-record.dto'
import { GetFinanceRecordsDto } from './dto/get-finance-records.dto'

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
		getFinanceRecordsArgs: GetFinanceRecordsDto,
	) {
		return this.financeRecordService.getFinanceRecords(getFinanceRecordsArgs)
	}

	@Mutation(() => FinanceRecordDto)
	createFinanceRecord(
		@Args('createFinanceRecordInput')
		createFinanceRecordInput: CreateFinanceRecordDto,
	) {
		return this.financeRecordService.createFinanceRecord(createFinanceRecordInput)
	}

	@Mutation(() => FinanceRecordDto)
	updateFinanceRecord(
		@Args('updateFinanceRecordInput')
		updateFinanceRecordInput: UpdateFinanceRecordDto,
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
