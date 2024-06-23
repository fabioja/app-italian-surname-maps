import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTrack1719152557922 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "track",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "application",
                        type: "varchar",
                        isUnique: true,
                    },
                    {
                        name: "area",
                        type: "varchar",
                        isUnique: true,
                    },
                    {
                        name: "type_event",
                        type: "varchar",
                        isUnique: true,
                    },
                    {
                        name: "datail",
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
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("track");
    }

}
