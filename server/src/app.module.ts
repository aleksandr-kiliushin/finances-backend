import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { FinanceController } from '@models/finance/finance.controller'
import { FinanceService } from '@models/finance/finance.service'
import { FinanceModule } from '@models/finance/finance.module'
import ormconfig from 'src/config/ormconfig'

// typeorm
import { Category } from '@models/finance/entities/category.entity'
import { Record } from '@models/finance/entities/record.entity'

@Module({
	imports: [
		TypeOrmModule.forRoot(ormconfig),
		TypeOrmModule.forFeature([Category, Record]),
		FinanceModule,
	],
	controllers: [FinanceController],
	providers: [FinanceService],
})
export class AppModule {}
