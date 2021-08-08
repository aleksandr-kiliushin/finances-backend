import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { FinanceController } from './finance.controller'
import { Category } from './entities/category.entity'
import { Record } from './entities/record.entity'
import { FinanceService } from './finance.service'

@Module({
	controllers: [FinanceController],
	imports: [TypeOrmModule.forFeature([Category, Record])],
	providers: [FinanceService],
})
export class FinanceModule {}
