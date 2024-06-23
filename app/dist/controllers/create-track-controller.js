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
const create_track_service_1 = require("../services/create-track/create-track.service");
class CreateTrackController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const key = request.header('x-api-key');
            //const key = apikey ? apikey : '';
            const { application, area, type_event, datail } = request.body;
            console.log("track", application, area, type_event, datail, key);
            const service = new create_track_service_1.CreateTrackService();
            try {
                const result = yield service.execute({ application, area, type_event, datail, key: key !== null && key !== void 0 ? key : '' });
                return response.json(result);
            }
            catch (error) {
                return response.status(400).json(error === null || error === void 0 ? void 0 : error.message);
            }
        });
    }
}
exports.default = CreateTrackController;
//# sourceMappingURL=create-track-controller.js.map