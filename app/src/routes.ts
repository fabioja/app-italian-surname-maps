import { Router } from "express";
import CreateTrackController from "./controllers/create-track-controller";
import GetItalianSurnameMapsController from "./controllers/get-italian-surname-maps.controller";
import GetTrackController from "./controllers/get-track.controller";
import { apiKeyValidator } from "./middlewares/api-Key-validator";

const routes = Router();

routes.get("/italian-surname-maps", apiKeyValidator, new GetItalianSurnameMapsController().handle);
routes.post("/tracks", apiKeyValidator, new CreateTrackController().handle);
routes.get("/tracks", apiKeyValidator, new GetTrackController().handle);

export default routes;