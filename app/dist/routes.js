"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const create_api_key_controller_1 = __importDefault(require("./controllers/create-api-key-controller"));
const get_italian_surname_maps_controller_1 = __importDefault(require("./controllers/get-italian-surname-maps.controller"));
const routes = (0, express_1.Router)();
routes.post("/api-keys", new create_api_key_controller_1.default().handle);
routes.get("/italian-surname-maps", new get_italian_surname_maps_controller_1.default().handle);
exports.default = routes;
//# sourceMappingURL=routes.js.map