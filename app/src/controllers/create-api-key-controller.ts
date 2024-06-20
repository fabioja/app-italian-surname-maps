import { Request, Response } from "express";
import { CreateApiKeyService } from "../services/create-api-key/create-api-key.service";

export default class CreateApiKeyController {
    async handle(request: Request, response: Response) {
        const { name } = request.body;

        console.log("api-key", name);

        const service = new CreateApiKeyService();

        try {
            const result = await service.execute({ name });
            return response.json(result);
        } catch (error: any) {
            return response.status(400).json(error?.message);
        }
    }
}