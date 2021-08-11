import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { FinanceRecordResolver } from './finance-record.resolver'
import { FinanceRecordService } from './finance-record.service'
import { FinanceRecordEntity } from './entities/finance-record.entity'
import { FinanceCategoryModule } from '@models/finance-category/finance-category.module'

@Module({
	imports: [TypeOrmModule.forFeature([FinanceRecordEntity]), FinanceCategoryModule],
	providers: [FinanceRecordResolver, FinanceRecordService],
})
export class FinanceRecordModule {}
