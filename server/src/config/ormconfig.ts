import { TypeOrmModuleOptions } from '@nestjs/typeorm'

const ormConfigDev: TypeOrmModuleOptions = {
	cli: { migrationsDir: 'src/migration' },
	database: process.env.LOCAL_DB_NAME,
	entities: ['dist/**/*.entity{.js,.ts}'],
	host: '127.0.0.1',
	migrations: ['src/migration/*.ts'],
	migrationsTableName: 'migration',
	password: process.env.POSTGRES_PASSWORD,
	port: 5432,
	ssl: false,
	synchronize: true, //should set "false" for production.
	type: 'postgres',
	username: 'postgres',
}

// const ormConfigProd: TypeOrmModuleOptions = {
// 	cli: { migrationsDir: 'src/migration' },
// 	database: process.env.DB_NAME,
// 	entities: ['dist/**/*.entity{ .ts,.js}'],
// 	host: process.env.DB_HOST,
// 	migrations: ['src/migration/*.ts'],
// 	migrationsTableName: 'migration',
// 	password: process.env.DB_PASSWORD,
// 	port: 5432,
// 	ssl: false,
// 	synchronize: false, // should be "false" for production.
// 	type: 'postgres',
// 	username: process.env.DB_USERNAME,
// }

// export default process.env.MODE === 'prod' ? ormConfigProd : ormConfigDev
export default ormConfigDev
