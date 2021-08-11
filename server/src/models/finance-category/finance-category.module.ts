import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { FinanceCategoryResolver } from './finance-category.resolver'
import { FinanceCategoryService } from './finance-category.service'
import { FinanceCategoryEntity } from './entities/finance-category.entity'

@Module({
	exports: [FinanceCategoryService],
	imports: [TypeOrmModule.forFeature([FinanceCategoryEntity])],
	providers: [FinanceCategoryResolver, FinanceCategoryService],
})
export class FinanceCategoryModule {}
