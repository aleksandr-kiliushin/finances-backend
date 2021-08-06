import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: 'postgres',
			host: '127.0.0.1',
			port: 5432,
			username: 'postgres',
			password: 'mysecretpassword',
			database: 'my_database',
			entities: ['**/*.entity{.ts}'],
			migrationsTableName: 'migration',
			migrations: ['src/migration/*.ts'],
			cli: { migrationsDir: 'src/migration' },
			ssl: false,
		}),
		// TypeOrmModule.forRoot({
		// 	type: 'postgres',
		// 	host: 'hattie.db.elephantsql.com',
		// 	port: 5432,
		// 	username: 'xwyksyfg',
		// 	password: 'lVJxIokcu6b0e-IFty7LnTEsivCE0WSG',
		// 	database: 'xwyksyfg',
		// 	entities: ['**/*.entity{.ts}'],
		// 	migrationsTableName: 'migration',
		// 	migrations: ['src/migration/*.ts'],
		// 	cli: { migrationsDir: 'src/migration' },
		// 	ssl: false,
		// }),
	],
})
export class AppModule {}
