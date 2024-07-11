import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Course {
    @PrimaryGeneratedColumn(  )
    id: number;
    @Column({ length: 500 })
    NombreMateria: string;
    @Column('text')
    Descripcion: string;
}
