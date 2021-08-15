import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { FinanceCategoryService } from '#models/finance-category/finance-category.service'
import { FinanceRecordEntity } from './entities/finance-record.entity'
import { UpdateFinanceRecordDto } from './dto/update-finance-record.dto'
import { CreateFinanceRecordDto } from './dto/create-finance-record.dto'
import { GetFinanceRecordsDto } from './dto/get-finance-records.dto'

@Injectable()
export class FinanceRecordService {
	constructor(
		@InjectRepository(FinanceRecordEntity)
		private financeRecordRepository: Repository<FinanceRecordEntity>,

		private financeCategoryService: FinanceCategoryService,
	) {}

	getFinanceRecord(id: FinanceRecordEntity['id']): Promise<FinanceRecordEntity> {
		return this.financeRecordRepository.findOneOrFail(id, {
			relations: ['category', 'category.type'],
		})
	}

	getFinanceRecords(getFinanceRecordsArgs: GetFinanceRecordsDto): Promise<FinanceRecordEntity[]> {
		return this.financeRecordRepository.find({
			order: {
				date: 'DESC',
			},
			relations: ['category', 'category.type'],
			where: getFinanceRecordsArgs,
		})
	}

	async createFinanceRecord(
		createFinanceRecordInput: CreateFinanceRecordDto,
	): Promise<FinanceRecordEntity> {
		const record = this.financeRecordRepository.create(createFinanceRecordInput) //as Record<string, unknown>

		const category = await this.financeCategoryService.getFinanceCategory(
			createFinanceRecordInput.categoryId,
		)

		record.category = category

		return this.financeRecordRepository.save(record)
	}

	async updateFinanceRecord(
		updateFinanceRecordInput: UpdateFinanceRecordDto,
	): Promise<FinanceRecordEntity> {
		const { id, categoryId, ...rest } = updateFinanceRecordInput

		const record = await this.getFinanceRecord(id)

		const updatedRecord = { ...record, ...rest }

		if (categoryId) {
			const category = await this.financeCategoryService.getFinanceCategory(categoryId)

			updatedRecord.category = category
		}

		return this.financeRecordRepository.save(updatedRecord)
	}

	async deleteFinanceRecord(id: FinanceRecordEntity['id']): Promise<FinanceRecordEntity> {
		const record = await this.getFinanceRecord(id)

		await this.financeRecordRepository.delete(id)

		return record
	}
}
