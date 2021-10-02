import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { In, Repository } from 'typeorm'

import { CreateFinanceCategoryTypeDto } from './dto/create-finance-category-type.dto'
import { FinanceCategoryTypeDto } from './dto/finance-category-type.dto'
import { UpdateFinanceCategoryTypeDto } from './dto/update-finance-category-type.dto'
import { FinanceCategoryTypeEntity } from './entities/finance-category-type.entity'

@Injectable()
export class FinanceCategoryTypeService {
	constructor(
		@InjectRepository(FinanceCategoryTypeEntity)
		private financeCategoryTypeRepository: Repository<FinanceCategoryTypeEntity>,
	) {}

	getFinanceCategoryTypes(query?: { ids: string }): Promise<FinanceCategoryTypeDto[]> {
		const { ids } = query
		const where = {
			...(ids && { id: In(ids.split(',')) }),
		}
		return this.financeCategoryTypeRepository.find({ where })
	}

	getFinanceCategoryType(id: FinanceCategoryTypeEntity['id']): Promise<FinanceCategoryTypeEntity> {
		return this.financeCategoryTypeRepository.findOneOrFail(id)
	}

	createFinanceCategoryType(
		createFinanceCategoryTypeDto: CreateFinanceCategoryTypeDto,
	): Promise<FinanceCategoryTypeEntity> {
		const { name } = createFinanceCategoryTypeDto
		const financeCategoryType = this.financeCategoryTypeRepository.create({ name })
		return this.financeCategoryTypeRepository.save(financeCategoryType)
	}

	async updateFinanceCategoryType(
		id: FinanceCategoryTypeEntity['id'],
		updateFinanceCategoryTypeDto: UpdateFinanceCategoryTypeDto,
	): Promise<FinanceCategoryTypeEntity> {
		const { name } = updateFinanceCategoryTypeDto
		const financeCategoryType = await this.financeCategoryTypeRepository.findOneOrFail({ id })
		if (name) {
			financeCategoryType.name = name
		}
		return this.financeCategoryTypeRepository.save(financeCategoryType)
	}

	async deleteFinanceCategoryType(
		id: FinanceCategoryTypeEntity['id'],
	): Promise<FinanceCategoryTypeEntity> {
		const financeCategoryType = await this.financeCategoryTypeRepository.findOneOrFail({ id })

		await this.financeCategoryTypeRepository.delete({ id })

		return financeCategoryType
	}
}
