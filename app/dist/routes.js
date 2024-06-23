"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const create_track_controller_1 = __importDefault(require("./controllers/create-track-controller"));
const get_italian_surname_maps_controller_1 = __importDefault(require("./controllers/get-italian-surname-maps.controller"));
const api_Key_validator_1 = require("./middlewares/api-Key-validator");
const routes = (0, express_1.Router)();
routes.get("/italian-surname-maps", api_Key_validator_1.apiKeyValidator, new get_italian_surname_maps_controller_1.default().handle);
routes.post("/tracks", api_Key_validator_1.apiKeyValidator, new create_track_controller_1.default().handle);
exports.default = routes;
//# sourceMappingURL=routes.js.map