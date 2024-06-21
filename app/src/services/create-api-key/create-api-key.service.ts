import { AppDataSource } from "../../database/data-source";
import ApiKey from "../../entities/api-key";

export type ApiKeyRequest = {
    name: string;
};

export class CreateApiKeyService {
    async execute({ name }: ApiKeyRequest): Promise<ApiKey> {
        const repository = AppDataSource.getRepository(ApiKey);

        console.log("api-key service", name);

        if (await repository.findOneBy({ name })) {
            throw new Error("category already exists");
        }

        const apiKey = repository.create({ name });

        await repository.save(apiKey);

        return apiKey;
    }
}