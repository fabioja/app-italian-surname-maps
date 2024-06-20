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
const api_names_services_1 = require("./../services/api-names/api-names.services");
class GetItalianSurnameMapsController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req.query['surname']);
                const surname = req.query['surname'];
                const data = yield (0, api_names_services_1.getItaianSurnameMaps)(surname);
                return res.status(data.status_code).json(data);
            }
            catch (error) {
                return res.status(500).json({ message: 'Error fetching external data' });
            }
        });
    }
}
exports.default = GetItalianSurnameMapsController;
//# sourceMappingURL=get-italian-surname-maps.controller.js.map