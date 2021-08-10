import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { FinanceRecordResolver } from './finance-record.resolver'
import { FinanceRecordService } from './finance-record.service'
import { FinanceRecordEntity } from './entities/finance-record.entity'
import { FinanceCategoryEntity } from '@models/finance-category/entities/finance-category.entity'

@Module({
	imports: [TypeOrmModule.forFeature([FinanceRecordEntity, FinanceCategoryEntity])],
	providers: [FinanceRecordResolver, FinanceRecordService],
})
export class FinanceRecordModule {}
