import { TypeOrmModuleOptions } from '@nestjs/typeorm'

const ormConfigDev: TypeOrmModuleOptions = {
	cli: { migrationsDir: 'src/migration' },
	database: process.env.LOCAL_DB_NAME,
	entities: ['dist/**/*.entity{.js,.ts}'],
	host: 'db', // Service name of DB in compose.dev.yml.
	migrations: ['src/migration/*.ts'],
	migrationsTableName: 'migration',
	password: process.env.POSTGRES_PASSWORD,
	port: 5432,
	ssl: false,
	synchronize: true,
	type: 'postgres',
	username: 'postgres',
}

// ToDo: create production ORM config.
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
// 	synchronize: false, // Should be "false" for production.
// 	type: 'postgres',
// 	username: process.env.DB_USERNAME,
// }

// export default process.env.MODE === 'prod' ? ormConfigProd : ormConfigDev
export default ormConfigDev
