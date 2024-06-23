import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity()
export class Track {
    @PrimaryColumn()
    id!: string;

    @Column()
    application!: string;

    @Column()
    area!: string;

    @Column()
    type_event!: string;

    @Column()
    datail!: string;

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