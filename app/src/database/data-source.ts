import "reflect-metadata";
import { DataSource } from "typeorm";
import ApiKey from "../entities/api-key";
import { Track } from "../entities/track";
import { CreateApiKey1701388927179 } from "./migration/1701388927179-create-api-key";
import { CreateTrack1719152557922 } from "./migration/1719152557922-create-track";

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
    entities: [ApiKey, Track],
    migrations: [CreateApiKey1701388927179, CreateTrack1719152557922],
    subscribers: [],
});