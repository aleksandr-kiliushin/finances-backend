import { TypeOrmModuleOptions } from '@nestjs/typeorm'

const ormconfigDev: TypeOrmModuleOptions = {
	cli: { migrationsDir: 'src/migration' },
	database: 'finance',
	entities: ['dist/**/*.entity{ .ts,.js}'],
	host: '127.0.0.1',
	migrations: ['src/migration/*.ts'],
	migrationsTableName: 'migration',
	password: '123',
	port: 5432,
	ssl: false,
	synchronize: true, //should set "false" for production.
	type: 'postgres',
	username: 'postgres',
}

// const ormconfigProd: TypeOrmModuleOptions = {
// 	cli: { migrationsDir: 'src/migration' },
// 	database: 'xwyksyfg',
// 	entities: ['dist/**/*.entity{ .ts,.js}'],
// 	host: 'hattie.db.elephantsql.com',
// 	migrations: ['src/migration/*.ts'],
// 	migrationsTableName: 'migration',
// 	password: 'lVJxIokcu6b0e-IFty7LnTEsivCE0WSG',
// 	port: 5432,
// 	ssl: false,
// 	synchronize: false, //should set "false" for production.
// 	type: 'postgres',
// 	username: 'xwyksyfg',
// }

export default ormconfigDev
