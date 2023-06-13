import {AppDataSource} from "../data-source";
import {
    Column,
    Entity,
    PrimaryGeneratedColumn
} from "typeorm";

@Entity()
export class Blog {
    @PrimaryGeneratedColumn()
    readonly id: number;
    @Column({type: "varchar"})
    title: string;
    @Column({type: "varchar"})
    content: string;
}