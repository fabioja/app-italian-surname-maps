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
exports.CreateApiKeyService = void 0;
const data_source_1 = require("../../database/data-source");
const api_key_1 = __importDefault(require("../../entities/api-key"));
class CreateApiKeyService {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ name }) {
            const repository = data_source_1.AppDataSource.getRepository(api_key_1.default);
            console.log("api-key service", name);
            if (yield repository.findOneBy({ name })) {
                throw new Error("category already exists");
            }
            const apiKey = repository.create({ name });
            yield repository.save(apiKey);
            return apiKey;
        });
    }
}
exports.CreateApiKeyService = CreateApiKeyService;
//# sourceMappingURL=create-api-key.service.js.map