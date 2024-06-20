import { Request, Response } from "express";
import { getItaianSurnameMaps } from './../services/api-names/api-names.services';


export default class GetItalianSurnameMapsController {
    async handle(req: Request, res: Response) {
        try {
            console.log(req.query['surname']);
            const surname: string = req.query['surname'] as string;
            const data = await getItaianSurnameMaps(surname);
            return res.status(data.status_code).json(data);
        } catch (error) {
            return res.status(500).json({ message: 'Error fetching external data' });
        }

    }
}