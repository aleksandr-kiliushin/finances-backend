import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { TypeOrmModule } from '@nestjs/typeorm'

import ormconfig from 'src/config/ormconfig'

import { FinanceCategoryModule } from '#models/finance-category/finance-category.module'
import { FinanceRecordModule } from '#models/finance-record/finance-record.module'
import { FinanceCategoryTypeModule } from '#models/finance-category-type/finance-category-type.module'

@Module({
	imports: [
		TypeOrmModule.forRoot(ormconfig),
		GraphQLModule.forRoot({
			autoSchemaFile: 'src/schema.gql',
			sortSchema: true,
		}),
		FinanceCategoryModule,
		FinanceCategoryTypeModule,
		FinanceRecordModule,
	],
})
export class AppModule {}
