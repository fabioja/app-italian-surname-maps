import { Router } from "express";
import GetItalianSurnameMapsController from "./controllers/get-italian-surname-maps.controller";

const routes = Router();

routes.get("/italian-surname-maps", new GetItalianSurnameMapsController().handle)

export default routes;