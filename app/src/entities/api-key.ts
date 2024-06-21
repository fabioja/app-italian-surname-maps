import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("api_key")
export default class ApiKey {
    @PrimaryColumn()
    id!: string;

    @Column()
    name!: string;

    @Column()
    key!: string;

    @CreateDateColumn()
    created_at!: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
            this.key = uuid();
        }
    }
}