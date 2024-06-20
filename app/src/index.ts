import cors from 'cors';
import * as dotenv from "dotenv";
import express from "express";
import { AppDataSource } from "./database/data-source";
import { apiKeyValidator } from './middlewares/api-Key-validator';
import routes from "./routes";


dotenv.config();

AppDataSource.initialize()
    .then(async () => {
        const app = express();
        app.use(express.json());

        // Middleware CORS
        app.use(cors());

        // Middleware para validar a API Key
        app.use(apiKeyValidator);

        app.use(routes);

        app.listen(3000);

        console.log("listening on port 3000");
    })
    .catch((error) => console.log(error));