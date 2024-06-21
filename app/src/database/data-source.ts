import "reflect-metadata";
import { DataSource } from "typeorm";
import ApiKey from "../entities/api-key";
import Category from "../entities/category";
import Video from "../entities/video";
import { CreateCategories1701388927178 } from "./migration/1701388927178-create-categories";
import { CreateApiKey1701388927179 } from "./migration/1701388927179-create-api-key";
import { CreateVideos1701389287927 } from "./migration/1701389287927-create-videos";

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
    entities: [Category, Video, ApiKey],
    migrations: [CreateCategories1701388927178, CreateVideos1701389287927, CreateApiKey1701388927179],
    subscribers: [],
});