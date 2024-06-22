import { NextFunction, Request, Response } from 'express';
import { GetApiKeyService } from '../services/get-api-key/get-api-key.service';

export const apiKeyValidator = (req: Request, res: Response, next: NextFunction) => {
    const apiKey = req.header('x-api-key');

    if (!apiKey) {
        return res.status(401).json({ message: 'API key is missing' });
    }

    const service = new GetApiKeyService();

    service.execute({ key: apiKey }).then((key) => {

        if (!key) {
            return res.status(403).json({ message: 'Invalid API key' });
        } else {
            next();
        }
    }).catch(() => {
        return res.status(403).json({ message: 'Invalid API key' });
    })
};