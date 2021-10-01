import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { FinanceCategoryTypeService } from './finance-category-type.service'
import { CreateFinanceCategoryTypeDto } from './dto/create-finance-category-type.dto'
import { UpdateFinanceCategoryTypeDto } from './dto/update-finance-category-type.dto'

@Controller('finance-category-type')
export class FinanceCategoryTypeController {
	constructor(private readonly financeCategoryTypeService: FinanceCategoryTypeService) {}

	@Post()
	create(@Body() createFinanceCategoryTypeDto: CreateFinanceCategoryTypeDto) {
		return this.financeCategoryTypeService.create(createFinanceCategoryTypeDto)
	}

	@Get()
	findAll() {
		return this.financeCategoryTypeService.findAll()
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.financeCategoryTypeService.findOne(+id)
	}

	@Patch(':id')
	update(
		@Param('id') id: string,
		@Body() updateFinanceCategoryTypeDto: UpdateFinanceCategoryTypeDto,
	) {
		return this.financeCategoryTypeService.update(+id, updateFinanceCategoryTypeDto)
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.financeCategoryTypeService.remove(+id)
	}
}
