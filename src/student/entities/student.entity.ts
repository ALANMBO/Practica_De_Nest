import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Student {
@PrimaryGeneratedColumn(  )
id: number;

@Column({ length: 500 })
name: string;

@Column('text')
correo: string;

@Column('int')
celular: number;

@Column('int')
direccion: number;
}
