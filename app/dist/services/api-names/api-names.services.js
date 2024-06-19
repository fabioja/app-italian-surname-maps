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
exports.getItaianSurnameMaps = void 0;
const axios_1 = __importDefault(require("axios"));
const getItaianSurnameMaps = (name) => __awaiter(void 0, void 0, void 0, function* () {
    const url = `https://www.cognomix.it/mappe-dei-cognomi-italiani/${name}`;
    try {
        let result = {
            value: "Desculpe, mas não foi possível localizar registro sobrenome informado!",
            status_code: 404
        };
        const response = yield axios_1.default.get(url);
        response.data.split("\n").forEach((item) => {
            if (item.indexOf('Ci sono') > -1) {
                const list = item.replace('class="map-container"></div><p>', '').replace('</p><div', '').replace('<strong>', '').replace('</strong>', '').split(' ');
                const text = `Existem aproximadamente ${list[3]} famílias ${list[5]} na Itália.`;
                result = {
                    value: text,
                    status_code: 200
                };
            }
        });
        return result;
    }
    catch (error) {
        console.error('Error fetching external data', error);
        throw error;
    }
});
exports.getItaianSurnameMaps = getItaianSurnameMaps;
