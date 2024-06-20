import { Router } from "express";
import CreateApiKeyController from "./controllers/create-api-key-controller";
import GetItalianSurnameMapsController from "./controllers/get-italian-surname-maps.controller";

const routes = Router();

routes.post("/api-keys", new CreateApiKeyController().handle);
routes.get("/italian-surname-maps", new GetItalianSurnameMapsController().handle);

export default routes;