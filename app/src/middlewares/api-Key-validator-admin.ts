import { NextFunction, Request, Response } from 'express';

export const apiKeyValidatorAdmin = (req: Request, res: Response, next: NextFunction) => {
    const apiKey = req.header('x-api-key');

    if (!apiKey) {
        return res.status(401).json({ message: 'API key is missing' });
    }

    const keyAdmin = process.env.API_KEY_ADMIN

    if (keyAdmin !== apiKey) {
        return res.status(403).json({ message: 'Invalid API key' });
    }

    next();

};