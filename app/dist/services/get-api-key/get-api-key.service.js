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
exports.GetApiKeyService = void 0;
const data_source_1 = require("../../database/data-source");
const api_key_1 = __importDefault(require("../../entities/api-key"));
class GetApiKeyService {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ key }) {
            const repository = data_source_1.AppDataSource.getRepository(api_key_1.default);
            console.log("api-key service", key);
            const apiKey = yield repository.findOneBy({ key });
            console.log('find apiKey: ', apiKey);
            if (!apiKey) {
                throw new Error("api key not exists");
            }
            return apiKey;
        });
    }
}
exports.GetApiKeyService = GetApiKeyService;
//# sourceMappingURL=get-api-key.service.js.map