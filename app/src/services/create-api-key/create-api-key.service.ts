import { AppDataSource } from "../../database/data-source";
import ApiKey from "../../entities/api-key";

export type ApiKeyRequest = {
    name: string;
};

export class CreateApiKeyService {
    async execute({ name }: ApiKeyRequest): Promise<ApiKey> {
        const repository = AppDataSource.getRepository(ApiKey);

        console.log("api-key service", name);

        const apiKeyDB = await repository.findOneBy({ name });

        if (apiKeyDB) {
            return apiKeyDB;
        }

        const apiKey = repository.create({ name });

        await repository.save(apiKey);

        return apiKey;
    }
}