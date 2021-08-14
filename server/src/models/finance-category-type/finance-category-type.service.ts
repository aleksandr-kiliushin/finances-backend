import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { In, Repository } from 'typeorm'
import { CreateFinanceCategoryTypeDto } from './dto/create-finance-category-type.dto'
import { UpdateFinanceCategoryTypeDto } from './dto/update-finance-category-type.dto'
import { FinanceCategoryTypeEntity } from './entities/finance-category-type.entity'

@Injectable()
export class FinanceCategoryTypeService {
	constructor(
		@InjectRepository(FinanceCategoryTypeEntity)
		private financeCategoryTypeRepository: Repository<FinanceCategoryTypeEntity>,
	) {}

	getFinanceCategoryType(id: FinanceCategoryTypeEntity['id']): Promise<FinanceCategoryTypeEntity> {
		return this.financeCategoryTypeRepository.findOneOrFail(id)
	}

	getFinanceCategoryTypes(
		ids?: FinanceCategoryTypeEntity['id'][],
	): Promise<FinanceCategoryTypeEntity[]> {
		let where = {}

		if (ids?.length) {
			where = { id: In(ids) }
		}

		return this.financeCategoryTypeRepository.find({ where })
	}

	createFinanceCategoryType(
		createFinanceCategoryTypeInput: CreateFinanceCategoryTypeDto,
	): Promise<FinanceCategoryTypeEntity> {
		const { name } = createFinanceCategoryTypeInput

		const financeCategoryType = this.financeCategoryTypeRepository.create({ name })

		return this.financeCategoryTypeRepository.save(financeCategoryType)
	}

	async updateFinanceCategoryType(
		updateFinanceCategoryTypeInput: UpdateFinanceCategoryTypeDto,
	): Promise<FinanceCategoryTypeEntity> {
		const { id, name } = updateFinanceCategoryTypeInput

		const financeCategoryType = await this.financeCategoryTypeRepository.findOneOrFail({ id })

		financeCategoryType.name = name

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
