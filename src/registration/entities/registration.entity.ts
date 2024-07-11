import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Registration {
    @PrimaryGeneratedColumn(  )
id: number;
}
