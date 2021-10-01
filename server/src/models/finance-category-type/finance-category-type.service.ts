import { Injectable } from '@nestjs/common'
import { CreateFinanceCategoryTypeDto } from './dto/create-finance-category-type.dto'
import { UpdateFinanceCategoryTypeDto } from './dto/update-finance-category-type.dto'

@Injectable()
export class FinanceCategoryTypeService {
	create(createFinanceCategoryTypeDto: CreateFinanceCategoryTypeDto) {
		return 'This action adds a new financeCategoryType'
	}

	findAll() {
		return `This action returns all financeCategoryType`
	}

	findOne(id: number) {
		return `This action returns a #${id} financeCategoryType`
	}

	update(id: number, updateFinanceCategoryTypeDto: UpdateFinanceCategoryTypeDto) {
		return `This action updates a #${id} financeCategoryType`
	}

	remove(id: number) {
		return `This action removes a #${id} financeCategoryType`
	}
}
