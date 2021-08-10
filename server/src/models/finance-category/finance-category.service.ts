import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { In, Repository } from 'typeorm'

import { FinanceCategoryEntity } from './entities/finance-category.entity'

// types
import { IFinanceCategory } from '@interfaces/finance'

@Injectable()
export class FinanceCategoryService {
	constructor(
		@InjectRepository(FinanceCategoryEntity)
		private financeCategoryRepository: Repository<FinanceCategoryEntity>,
	) {}

	async getCategory(id: IFinanceCategory['id']): Promise<IFinanceCategory> {
		return await this.financeCategoryRepository.findOneOrFail(id)
	}

	getCategories(ids: IFinanceCategory['id'][]): Promise<IFinanceCategory[]> {
		let where = {}

		if (ids.length) {
			where = { ...where, id: In(ids) }
		}

		return this.financeCategoryRepository.find({ where })
	}

	// getAllRecords(): Promise<IRecord[]> {
	// 	return this.recordRepository.find({
	// 		order: {
	// 			date: 'DESC',
	// 		},
	// 		relations: ['category'],
	// 	})
	// }
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
	// 	if (record.isTrashed) {
	// 		return this.recordRepository.remove(record)
	// 	}
	// 	record.isTrashed = true
	// 	return this.recordRepository.save(record)
	// }
}
