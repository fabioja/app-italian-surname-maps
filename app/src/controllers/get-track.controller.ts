import { Request, Response } from "express";

import { GetTrackService } from "../services/get-track/get-track.service";


export default class GetTrackController {
    async handle(req: Request, res: Response) {

        const application: string = req.query['application'] as string;
        const area: string = req.query['area'] as string;
        const type_event: string = req.query['type_event'] as string;
        const datail: string = req.query['datail'] as string;
        const key: string = req.query['key'] as string;

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
        }

        const service = new GetTrackService();
        try {
            const parameters: { [key: string]: any; } = {};
            for (let index = 0; index < queries.itens.length - 1; index++) {
                !!queries.itens[index].value && (parameters[queries.itens[index].name] = queries.itens[index].value);
            }

            const result = await service.execute(parameters);
            return res.json(result);
        } catch (error: any) {
            return res.status(400).json(error?.message);
        }
    }
}