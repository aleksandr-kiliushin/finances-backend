import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { TypeOrmModule } from '@nestjs/typeorm'

import ormconfig from 'src/config/ormconfig'
import { FinanceModule } from '@models/finance/finance.module'

@Module({
	imports: [
		TypeOrmModule.forRoot(ormconfig),
		FinanceModule,
		GraphQLModule.forRoot({
			autoSchemaFile: 'src/schema.gql',
			sortSchema: true,
		}),
	],
})
export class AppModule {}
