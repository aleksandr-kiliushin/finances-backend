import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common'

import { FinanceCategoryTypeService } from './finance-category-type.service'

import { CreateFinanceCategoryTypeDto } from './dto/create-finance-category-type.dto'
import { UpdateFinanceCategoryTypeDto } from './dto/update-finance-category-type.dto'

@Controller('finance-category-type')
export class FinanceCategoryTypeController {
	constructor(private readonly financeCategoryTypeService: FinanceCategoryTypeService) {}

	@Get()
	getFinanceCategoryTypes(@Query() query: any) {
		return this.financeCategoryTypeService.getFinanceCategoryTypes(query)
	}

	@Get(':id')
	getFinanceCategoryType(@Param('id') id: string) {
		return this.financeCategoryTypeService.getFinanceCategoryType(+id)
	}

	@Post()
	createFinanceCategoryType(@Body() createFinanceCategoryTypeDto: CreateFinanceCategoryTypeDto) {
		return this.financeCategoryTypeService.createFinanceCategoryType(createFinanceCategoryTypeDto)
	}

	@Patch(':id')
	updateFinanceCategoryType(
		@Param('id') id: string,
		@Body() updateFinanceCategoryTypeDto: UpdateFinanceCategoryTypeDto,
	) {
		return this.financeCategoryTypeService.updateFinanceCategoryType(
			+id,
			updateFinanceCategoryTypeDto,
		)
	}

	@Delete(':id')
	deleteFinanceCategoryType(@Param('id') id: string) {
		return this.financeCategoryTypeService.deleteFinanceCategoryType(+id)
	}
}
