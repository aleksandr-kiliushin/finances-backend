import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { FinanceCategoryResolver } from './finance-category.resolver'
import { FinanceCategoryService } from './finance-category.service'
import { FinanceCategoryEntity } from './entities/finance-category.entity'
import { FinanceCategoryTypeModule } from '#models/OLD-finance-category-type/finance-category-type.module'

@Module({
	exports: [FinanceCategoryService],
	imports: [TypeOrmModule.forFeature([FinanceCategoryEntity]), FinanceCategoryTypeModule],
	providers: [FinanceCategoryResolver, FinanceCategoryService],
})
export class FinanceCategoryModule {}
