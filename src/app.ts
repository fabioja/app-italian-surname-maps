import cors from 'cors';
import express, { Request, Response } from 'express';
import { apiKeyValidator } from './middlewares/api-Key-validator';
import { getItaianSurnameMaps } from './services/api-names/api-names.services';

const app = express();

// Configuração personalizada do CORS
const corsOptions = {
    origin: ['*'], // Substitua com suas origens permitidas
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization', 'x-api-key'],
};

// Middleware CORS
app.use(cors());

// Middleware para validar a API Key
app.use(apiKeyValidator);

app.get('/', (req: Request, res: Response) => {
    res.send('Working...');
});

// Novo endpoint que acessa a API externa
app.get('/italian-surname-maps', async (req: Request, res: Response) => {
    try {
        console.log(req.query['surname']);
        const surname: string = req.query['surname'] as string;
        const data = await getItaianSurnameMaps(surname);
        res.status(data.status_code).json(data);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching external data' });
    }
});

export default app;