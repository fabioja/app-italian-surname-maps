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
exports.CreateTrackService = void 0;
const data_source_1 = require("../../database/data-source");
const track_1 = require("../../entities/track");
class CreateTrackService {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ application, area, type_event, datail, key }) {
            const repository = data_source_1.AppDataSource.getRepository(track_1.Track);
            console.log("track service", application, area, type_event, datail, key);
            const track = repository.create({ application, area, type_event, datail, key });
            yield repository.save(track);
            return track;
        });
    }
}
exports.CreateTrackService = CreateTrackService;
//# sourceMappingURL=create-track.service.js.map