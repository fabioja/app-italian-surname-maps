import { MigrationInterface, QueryRunner, Table } from "typeorm";
import ApiKey from "../../entities/api-key";

export class CreateApiKey1701388927179 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "api_key",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "name",
                        type: "varchar",
                        isUnique: true,
                    },
                    {
                        name: "key",
                        type: "uuid",
                        isUnique: true,
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                ],
            })
        );

        const apiKey = await queryRunner.manager.save(ApiKey, [new ApiKey('admin')]);

        console.log(`api key admin: ${apiKey[0].key}`);

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("categories");
    }
}