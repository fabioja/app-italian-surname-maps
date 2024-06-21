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
Object.defineProperty(exports, "__esModule", { value: true });
const create_api_key_service_1 = require("../services/create-api-key/create-api-key.service");
class CreateApiKeyController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name } = request.body;
            console.log("api-key", name);
            const service = new create_api_key_service_1.CreateApiKeyService();
            try {
                const result = yield service.execute({ name });
                return response.json(result);
            }
            catch (error) {
                return response.status(400).json(error === null || error === void 0 ? void 0 : error.message);
            }
        });
    }
}
exports.default = CreateApiKeyController;
//# sourceMappingURL=create-api-key-controller.js.map