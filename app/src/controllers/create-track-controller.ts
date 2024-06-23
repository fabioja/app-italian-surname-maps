import { Request, Response } from "express";
import { CreateTrackService } from "../services/create-track/create-track.service";

export default class CreateTrackController {
    async handle(request: Request, response: Response) {
        const key = request.header('x-api-key');
        //const key = apikey ? apikey : '';
        const { application, area, type_event, datail } = request.body;

        console.log("track", application, area, type_event, datail, key);

        const service = new CreateTrackService();

        try {
            const result = await service.execute({ application, area, type_event, datail, key: key ?? '' });
            return response.json(result);
        } catch (error: any) {
            return response.status(400).json(error?.message);
        }
    }
}