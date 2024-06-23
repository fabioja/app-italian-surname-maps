import { Router } from "express";
import CreateTrackController from "./controllers/create-track-controller";
import GetItalianSurnameMapsController from "./controllers/get-italian-surname-maps.controller";
import { apiKeyValidator } from "./middlewares/api-Key-validator";

const routes = Router();

routes.get("/italian-surname-maps", apiKeyValidator, new GetItalianSurnameMapsController().handle);
routes.post("/tracks", apiKeyValidator, new CreateTrackController().handle);

export default routes;