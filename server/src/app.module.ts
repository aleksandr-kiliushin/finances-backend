import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { TypeOrmModule } from '@nestjs/typeorm'

import ormconfig from 'src/config/ormconfig'

import { AuthModule } from './models/auth/auth.module'
import { FinanceCategoryModule } from '#models/finance-category/finance-category.module'
import { FinanceRecordModule } from '#models/finance-record/finance-record.module'
import { FinanceCategoryTypeModule } from '#models/OLD-finance-category-type/finance-category-type.module'
import { UserModule } from './models/user/user.module'

@Module({
	imports: [
		TypeOrmModule.forRoot(ormconfig),
		GraphQLModule.forRoot({
			autoSchemaFile: 'src/schema.gql',
			context: ({ req }) => ({ headers: req.headers }),
			sortSchema: true,
		}),
		AuthModule,
		FinanceCategoryModule,
		FinanceCategoryTypeModule,
		FinanceRecordModule,
		UserModule,
	],
})
export class AppModule {}
