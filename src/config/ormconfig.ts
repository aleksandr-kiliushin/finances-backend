import { TypeOrmModuleOptions } from '@nestjs/typeorm'

const ormConfig: TypeOrmModuleOptions = {
  cli: { migrationsDir: 'src/migration' },
  database: process.env.DB_NAME,
  entities: ['dist/**/*.entity{.js,.ts}'],
  host: process.env.DB_HOST, // Service name of DB in compose.dev.yml.
  migrations: ['src/migration/*.ts'],
  migrationsTableName: 'migration',
  password: process.env.POSTGRES_PASSWORD,
  port: 5432,
  ssl: false,
  synchronize: process.env.MODE === 'dev',
  type: 'postgres',
  username: process.env.DB_USERNAME,
}

export default ormConfig
