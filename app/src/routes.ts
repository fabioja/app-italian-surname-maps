import { Router } from "express";
import GetItalianSurnameMapsController from "./controllers/get-italian-surname-maps.controller";
import { apiKeyValidator } from "./middlewares/api-Key-validator";

const routes = Router();

routes.get("/italian-surname-maps", apiKeyValidator, new GetItalianSurnameMapsController().handle);

export default routes;