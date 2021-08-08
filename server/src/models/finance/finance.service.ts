import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Record } from './entities/record.entity'
import { Category } from './entities/category.entity'
import { IRecord } from '@interfaces/record'

@Injectable()
export class FinanceService {
	constructor(
		@InjectRepository(Category) private categoryRepository: Repository<Category>,
		@InjectRepository(Record) private recordRepository: Repository<Record>,
	) {}

	getAll(): Promise<IRecord[]> {
		return this.recordRepository.find({
			order: {
				date: 'DESC',
			},
			relations: ['category'],
		})
	}

	async createRecord(amount: number, category_id: number, date: string): Promise<IRecord> {
		const category = await this.categoryRepository.findOne(category_id)

		const newRecord = this.recordRepository.create({ amount, category, date })

		return this.recordRepository.save(newRecord)
	}

	async updateRecord(
		amount: number,
		categoryId: number,
		date: string,
		id: number,
	): Promise<IRecord> {
		const category = await this.categoryRepository.findOne(categoryId)

		const record = await this.recordRepository.findOne(id)

		record.amount = amount
		record.category = category
		record.date = date

		return this.recordRepository.save(record)
	}

	async deleteRecord(id: number): Promise<IRecord> {
		const record = await this.recordRepository.findOne(id)

		if (record.isTrashed) {
			return this.recordRepository.remove(record)
		}

		record.isTrashed = true

		return this.recordRepository.save(record)
	}
}
