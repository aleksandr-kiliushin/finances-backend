import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { FinanceRecord } from './entities/finance-record.entity'
// import { FinanceCategory } from '@models/finance-category/entities/finance-category.entity'

// types
import { IRecord } from '@interfaces/finance'

@Injectable()
export class FinanceRecordService {
	constructor(
		// @InjectRepository(FinanceCategory) private categoryRepository: Repository<FinanceCategory>,
		@InjectRepository(FinanceRecord) private financeRecordRepository: Repository<FinanceRecord>,
	) {}

	getRecords(): Promise<IRecord[]> {
		return this.financeRecordRepository.find({
			order: {
				date: 'DESC',
			},
			// relations: ['category'],
		})
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
	Finance
	// 	if (record.isTrashed) {
	// 		return this.recordRepository.remove(record)
	// 	}

	// 	record.isTrashed = true

	// 	return this.recordRepository.save(record)
	// }
}
