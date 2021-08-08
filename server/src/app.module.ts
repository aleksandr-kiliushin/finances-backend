import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { FinanceModule } from '@models/finance/finance.module'
import ormconfig from 'src/config/ormconfig'

@Module({
	imports: [TypeOrmModule.forRoot(ormconfig), FinanceModule],
})
export class AppModule {}
