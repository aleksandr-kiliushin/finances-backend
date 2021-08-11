import { Module } from '@nestjs/common'
import { FinanceCategoryTypeResolver } from './finance-category-type.resolver'
import { FinanceCategoryTypeService } from './finance-category-type.service'

@Module({
	providers: [FinanceCategoryTypeResolver, FinanceCategoryTypeService],
})
export class FinanceCategoryTypeModule {}
