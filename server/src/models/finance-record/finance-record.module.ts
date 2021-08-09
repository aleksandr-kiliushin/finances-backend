import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { FinanceRecordResolver } from './finance-record.resolver'
import { FinanceRecordService } from './finance-record.service'
import { FinanceRecordEntity } from './entities/finance-record.entity'

@Module({
	imports: [TypeOrmModule.forFeature([FinanceRecordEntity])],
	providers: [FinanceRecordResolver, FinanceRecordService],
})
export class FinanceRecordModule {}
