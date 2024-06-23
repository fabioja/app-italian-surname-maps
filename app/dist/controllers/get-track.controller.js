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
const get_track_service_1 = require("../services/get-track/get-track.service");
class GetTrackController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const application = req.query['application'];
            const area = req.query['area'];
            const type_event = req.query['type_event'];
            const datail = req.query['datail'];
            const key = req.query['key'];
            const queries = {
                itens: [
                    {
                        name: "application",
                        value: application
                    },
                    {
                        name: "area",
                        value: area
                    },
                    {
                        name: "type_event",
                        value: type_event
                    },
                    {
                        name: "datail",
                        value: datail
                    },
                    {
                        name: "key",
                        value: key
                    }
                ]
            };
            const service = new get_track_service_1.GetTrackService();
            try {
                const parameters = {};
                for (let index = 0; index < queries.itens.length - 1; index++) {
                    !!queries.itens[index].value && (parameters[queries.itens[index].name] = queries.itens[index].value);
                }
                const result = yield service.execute(parameters);
                return res.json(result);
            }
            catch (error) {
                return res.status(400).json(error === null || error === void 0 ? void 0 : error.message);
            }
        });
    }
}
exports.default = GetTrackController;
//# sourceMappingURL=get-track.controller.js.map