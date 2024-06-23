import { AppDataSource } from "../../database/data-source";
import { Track } from "../../entities/track";

export class GetTrackService {
    async execute(queries: { [key: string]: any }): Promise<Track[]> {
        const repository = AppDataSource.getRepository(Track);

        const tracks = await repository.findBy(queries);

        console.log('find track query: ', queries);

        if (!tracks) {
            throw new Error("trak exists");
        }

        return tracks;
    }
}