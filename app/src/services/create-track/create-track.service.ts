import { AppDataSource } from "../../database/data-source";
import { Track } from "../../entities/track";

export type TrackRequest = {
    application: string;
    area: string;
    type_event: string;
    datail: string;
    key: string;
};

export class CreateTrackService {
    async execute({ application, area, type_event, datail, key }: TrackRequest): Promise<Track> {
        const repository = AppDataSource.getRepository(Track);

        console.log("track service", application, area, type_event, datail, key);

        const track = repository.create({ application, area, type_event, datail, key });

        await repository.save(track);

        return track;
    }
}