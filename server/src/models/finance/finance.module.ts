import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { FinanceResolver } from './finance.resolver'
import { FinanceService } from './finance.service'
import { Category } from './entities/category.entity'
import { Record } from './entities/record.entity'

@Module({
	imports: [TypeOrmModule.forFeature([Category, Record])],
	providers: [FinanceResolver, FinanceService],
})
export class FinanceModule {}
