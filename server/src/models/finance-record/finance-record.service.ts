import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { FinanceRecordEntity } from './entities/finance-record.entity'
import { FinanceCategoryEntity } from '@models/finance-category/entities/finance-category.entity'

import { UpdateFinanceRecordInput } from './dto/update-finance-record.input'
import { CreateFinanceRecordInput } from './dto/create-finance-record.input'

// types
import { IFinanceRecord } from '@interfaces/finance'

@Injectable()
export class FinanceRecordService {
	constructor(
		@InjectRepository(FinanceRecordEntity)
		private financeRecordRepository: Repository<FinanceRecordEntity>,

		@InjectRepository(FinanceCategoryEntity)
		private financeCategoryRepository: Repository<FinanceCategoryEntity>,
	) {}

	async getFinanceRecord(recordId: IFinanceRecord['id']): Promise<IFinanceRecord> {
		return await this.financeRecordRepository.findOneOrFail(recordId)
	}

	getFinanceRecords(): Promise<IFinanceRecord[]> {
		return this.financeRecordRepository.find({
			order: {
				date: 'DESC',
			},
			// relations: ['category'],
		})
	}

	async createFinanceRecord(createFinanceRecordInput: CreateFinanceRecordInput) {
		const record = this.financeRecordRepository.create(createFinanceRecordInput as Object)

		const category = await this.financeCategoryRepository.findOne(
			createFinanceRecordInput.categoryId,
		)

		record.category = category

		return this.financeRecordRepository.save(record)
	}

	async updateFinanceRecord(updateFinanceRecordInput: UpdateFinanceRecordInput) {
		const { id, categoryId, ...rest } = updateFinanceRecordInput

		const record = await this.getFinanceRecord(id)

		const updatedRecord = {
			...record,
			...rest,
		}

		if (categoryId) {
			const category = await this.financeCategoryRepository.findOne(categoryId)
			updatedRecord.category = category
		}

		return this.financeRecordRepository.save(updatedRecord)
	}

	async deleteFinanceRecord(recordId: IFinanceRecord['id']): Promise<IFinanceRecord> {
		const record = await this.getFinanceRecord(recordId)

		await this.financeRecordRepository.delete(recordId)

		return record
	}

	// getCategoryRecords(id: number): Promise<IRecord[]> {
	// 	return this.recordRepository.find({ where: { category: id } })
	// }

	// getCategoryById(id: number): Promise<ICategory> {
	// 	return this.categoryRepository.findOne(id)
	// }

	// async createRecord(amount: number, category_id: number, date: string): Promise<IRecord> {
	// 	const category = await this.categoryRepository.findOne(category_id)

	// 	const newRecord = this.recordRepository.create({ amount, category, date })

	// 	return this.recordRepository.save(newRecord)
	// }

	// async updateRecord(
	// 	amount: number,
	// 	categoryId: number,
	// 	date: string,
	// 	id: number,
	// ): Promise<IRecord> {
	// 	const category = await this.categoryRepository.findOne(categoryId)

	// 	const record = await this.recordRepository.findOne(id)

	// 	record.amount = amount
	// 	record.category = category
	// 	record.date = date

	// 	return this.recordRepository.save(record)
	// }

	// async deleteRecord(id: number): Promise<IRecord> {
	// 	const record = await this.recordRepository.findOne(id)
	// Finance
	// 	if (record.isTrashed) {
	// 		return this.recordRepository.remove(record)
	// 	}

	// 	record.isTrashed = true

	// 	return this.recordRepository.save(record)
	// }
}
