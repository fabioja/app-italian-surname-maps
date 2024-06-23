import { Router } from "express";
import CreateApiKeyController from "./controllers/create-api-key-controller";
import { apiKeyValidatorAdmin } from "./middlewares/api-Key-validator-admin";

const routesAdmin = Router();

routesAdmin.post("/api-keys-admin", apiKeyValidatorAdmin, new CreateApiKeyController().handle);

export default routesAdmin;