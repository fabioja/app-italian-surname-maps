import { AppDataSource } from "../../database/data-source";
import ApiKey from "../../entities/api-key";

export type ApiKeyRequest = {
    key: string;
};

export class GetApiKeyService {
    async execute({ key }: ApiKeyRequest): Promise<ApiKey> {
        const repository = AppDataSource.getRepository(ApiKey);

        console.log("api-key service", key);

        const apiKey = await repository.findOneBy({ key });

        console.log('find apiKey: ', apiKey);

        if (!apiKey) {
            throw new Error("api key not exists");
        }

        return apiKey;
    }
}