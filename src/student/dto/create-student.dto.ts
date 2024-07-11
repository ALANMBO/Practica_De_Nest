import { IsNumber, IsString } from "class-validator";
import { Transform } from "class-transformer";
export class CreateStudentDto {
    @IsString()
    name: string;
    @IsString()
    correo: string;
    @Transform(({ value }) => Number(value))
    @IsNumber()
    celular: number;
    @Transform(({ value }) => Number(value))
    @IsNumber()
    direccion: number;

}
