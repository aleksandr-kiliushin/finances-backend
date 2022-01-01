import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UseGuards } from '@nestjs/common'

import { AuthGuard } from '#models/auth/auth.guard'
import { FinanceCategoryService } from './finance-category.service'
import { CreateFinanceCategoryDto } from './dto/create-finance-category.dto'
import { UpdateFinanceCategoryDto } from './dto/update-finance-category.dto'

@Controller('finance-category')
@UseGuards(AuthGuard)
export class FinanceCategoryController {
  constructor(private financeCategoryService: FinanceCategoryService) {}

  @Get()
  getFinanceCategories(@Query() query: any) {
    return this.financeCategoryService.getFinanceCategories(query)
  }

  @Get(':id')
  getFinanceCategory(@Param('id') id: string) {
    return this.financeCategoryService.getFinanceCategory(+id)
  }

  @Post()
  createFinanceCategory(@Body() createFinanceCategoryDto: CreateFinanceCategoryDto) {
    return this.financeCategoryService.createFinanceCategory(createFinanceCategoryDto)
  }

  @Patch(':id')
  updateFinanceCategory(
    @Param('id') id: string,
    @Body() updateFinanceCategoryDto: UpdateFinanceCategoryDto,
  ) {
    return this.financeCategoryService.updateFinanceCategory(+id, updateFinanceCategoryDto)
  }

  @Delete(':id')
  deleteFinanceCategory(@Param('id') id: string) {
    return this.financeCategoryService.deleteFinanceCategory(+id)
  }
}
