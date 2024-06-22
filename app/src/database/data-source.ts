import "reflect-metadata";
import { DataSource } from "typeorm";
import ApiKey from "../entities/api-key";
import { CreateApiKey1701388927179 } from "./migration/1701388927179-create-api-key";

const treatNullValue = (value: string | undefined) => {
    return value ? value : '0'
}

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DATABASE_HOST,
    port: parseInt(treatNullValue(process.env.DATABASE_PORT)),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    synchronize: true,
    logging: false,
    entities: [ApiKey],
    migrations: [CreateApiKey1701388927179],
    subscribers: [],
});