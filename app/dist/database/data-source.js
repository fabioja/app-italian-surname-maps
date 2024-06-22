"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const api_key_1 = __importDefault(require("../entities/api-key"));
const _1701388927179_create_api_key_1 = require("./migration/1701388927179-create-api-key");
const treatNullValue = (value) => {
    return value ? value : '0';
};
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: process.env.DATABASE_HOST,
    port: parseInt(treatNullValue(process.env.DATABASE_PORT)),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    synchronize: true,
    logging: false,
    entities: [api_key_1.default],
    migrations: [_1701388927179_create_api_key_1.CreateApiKey1701388927179],
    subscribers: [],
});
//# sourceMappingURL=data-source.js.map