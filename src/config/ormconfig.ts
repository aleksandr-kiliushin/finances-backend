import { TypeOrmModuleOptions } from "@nestjs/typeorm"

const ormConfig: TypeOrmModuleOptions = {
  database: process.env.DATABASE_NAME,
  entities: ["dist/**/*.entity{.js,.ts}"],
  host: process.env.DATABASE_HOST, // Name of database service in compose.dev.yml.
  migrations: ["src/migration/*.ts"],
  migrationsTableName: "migration",
  password: process.env.POSTGRES_PASSWORD,
  port: 5432,
  ssl: false,
  synchronize: process.env.MODE === "dev",
  type: "postgres",
  username: process.env.DATABASE_USERNAME,
}

export default ormConfig
