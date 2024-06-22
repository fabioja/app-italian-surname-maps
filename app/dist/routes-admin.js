"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const create_api_key_controller_1 = __importDefault(require("./controllers/create-api-key-controller"));
const api_Key_validator_admin_1 = require("./middlewares/api-Key-validator-admin");
const routesAdmin = (0, express_1.Router)();
routesAdmin.post("/api-keys-admin", api_Key_validator_admin_1.apiKeyValidatorAdmin, new create_api_key_controller_1.default().handle);
exports.default = routesAdmin;
//# sourceMappingURL=routes-admin.js.map