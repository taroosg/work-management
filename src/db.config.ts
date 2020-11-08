import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { POSTGRES_HOST, POSTGRES_PORT, POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DATABASE, } from './app.config';

export const dbConfig: TypeOrmModuleOptions = {
  type: "postgres",
  host: POSTGRES_HOST,
  port: Number(POSTGRES_PORT),
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DATABASE,
  entities: [
    "dist/entities/**/*.entity.js"
  ],
  migrations: [
    "dist/migrations/**/*.js"
  ],
  synchronize: false,
  migrationsRun: true,
};