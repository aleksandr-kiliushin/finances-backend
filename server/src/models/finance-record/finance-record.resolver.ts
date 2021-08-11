import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'

import { FinanceRecordService } from './finance-record.service'
import { FinanceRecordDto } from './dto/finance-record.dto'
import { CreateFinanceRecordDto } from './dto/create-finance-record.dto'
import { UpdateFinanceRecordDto } from './dto/update-finance-record.dto'

@Resolver(of => FinanceRecordDto)
export class FinanceRecordResolver {
	constructor(private financeRecordService: FinanceRecordService) {}

	@Query(returns => FinanceRecordDto, { name: 'financeRecord' })
	getFinanceRecord(
		@Args('recordId')
		recordId: number,
	) {
		return this.financeRecordService.getFinanceRecord(recordId)
	}

	@Query(returns => [FinanceRecordDto], { name: 'financeRecords' })
	getFinanceRecords() {
		return this.financeRecordService.getFinanceRecords()
	}

	@Mutation(returns => FinanceRecordDto)
	createFinanceRecord(
		@Args('createFinanceRecordInput')
		createFinanceRecordInput: CreateFinanceRecordDto,
	) {
		return this.financeRecordService.createFinanceRecord(createFinanceRecordInput)
	}

	@Mutation(returns => FinanceRecordDto)
	updateFinanceRecord(
		@Args('updateFinanceRecordInput')
		updateFinanceRecordInput: UpdateFinanceRecordDto,
	) {
		return this.financeRecordService.updateFinanceRecord(updateFinanceRecordInput)
	}

	@Mutation(returns => FinanceRecordDto)
	deleteFinanceRecord(
		@Args('recordId')
		recordId: number,
	) {
		return this.financeRecordService.deleteFinanceRecord(recordId)
	}
}
