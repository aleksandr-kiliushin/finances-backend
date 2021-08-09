import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { FinanceRecordResolver } from './finance-record.resolver'
import { FinanceRecordService } from './finance-record.service'
// import { Category } from './entities/category.entity'
import { FinanceRecord } from './entities/finance-record.entity'

@Module({
	imports: [TypeOrmModule.forFeature([FinanceRecord])],
	providers: [FinanceRecordResolver, FinanceRecordService],
})
export class FinanceRecordModule {}
