"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const api_Key_validator_1 = require("./middlewares/api-Key-validator");
const api_names_services_1 = require("./services/api-names/api-names.services");
const app = (0, express_1.default)();
// Configuração personalizada do CORS
const corsOptions = {
    origin: ['*'], // Substitua com suas origens permitidas
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization', 'x-api-key'],
};
// Middleware CORS
app.use((0, cors_1.default)());
// Middleware para validar a API Key
app.use(api_Key_validator_1.apiKeyValidator);
app.get('/', (req, res) => {
    res.send('Working...');
});
// Novo endpoint que acessa a API externa
app.get('/italian-surname-maps', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.query['surname']);
        const surname = req.query['surname'];
        const data = yield (0, api_names_services_1.getItaianSurnameMaps)(surname);
        res.status(data.status_code).json(data);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching external data' });
    }
}));
exports.default = app;
