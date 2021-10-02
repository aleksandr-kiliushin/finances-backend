import { FinanceCategoryTypeService } from '#models/OLD-finance-category-type/finance-category-type.service'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { In, Repository } from 'typeorm'
import { CreateFinanceCategoryInput } from './dto/create-finance-category.input'
import { GetFinanceCategoriesArgs } from './dto/get-finance-categories.args'
import { UpdateFinanceCategoryInput } from './dto/update-finance-category.input'
import { FinanceCategoryEntity } from './entities/finance-category.entity'

@Injectable()
export class FinanceCategoryService {
	constructor(
		@InjectRepository(FinanceCategoryEntity)
		private financeCategoryRepository: Repository<FinanceCategoryEntity>,

		private financeCategoryTypeService: FinanceCategoryTypeService,
	) {}

	getFinanceCategory(id: FinanceCategoryEntity['id']): Promise<FinanceCategoryEntity> {
		return this.financeCategoryRepository.findOneOrFail(id, {
			relations: ['type'],
		})
	}

	getFinanceCategories(
		getFinanceCategoriesArgs: GetFinanceCategoriesArgs,
	): Promise<FinanceCategoryEntity[]> {
		const { ids } = getFinanceCategoriesArgs

		let where = {}

		if (ids?.length) {
			where = { id: In(ids) }
		}

		return this.financeCategoryRepository.find({
			where,
			relations: ['type'],
		})
	}

	async createFinanceCategory(
		createFinanceCategoryInput: CreateFinanceCategoryInput,
	): Promise<FinanceCategoryEntity> {
		const { typeId, name } = createFinanceCategoryInput

		const type = await this.financeCategoryTypeService.getFinanceCategoryType(typeId)

		const category = this.financeCategoryRepository.create({ name, type }) //as Record<string, unknown>

		return this.financeCategoryRepository.save(category)
	}

	async updateFinanceCategory(
		updateFinanceCategoryInput: UpdateFinanceCategoryInput,
	): Promise<FinanceCategoryEntity> {
		const { id, typeId, name } = updateFinanceCategoryInput

		const category = await this.getFinanceCategory(id)

		if (typeId) {
			const type = await this.financeCategoryTypeService.getFinanceCategoryType(typeId)

			category.type = type
		}

		if (name) {
			category.name = name
		}

		return this.financeCategoryRepository.save(category)
	}

	async deleteFinanceCategory(id: FinanceCategoryEntity['id']): Promise<FinanceCategoryEntity> {
		const category = await this.getFinanceCategory(id)

		await this.financeCategoryRepository.delete(id)

		return category
	}
}
