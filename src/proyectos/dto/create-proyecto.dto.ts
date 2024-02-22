// export class CreateProyectoDto {}
import { IsString, IsInt, IsNotEmpty, MaxLength, IsDate, IsOptional } from 'class-validator';

export class CreateProyectoDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(500, { message: "La longitud máxima es de 500 caracteres" })
  nombre: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(10, { message: "La longitud máxima es de 10 caracteres" })
  gestion: string;

  @IsDate()
  @IsOptional()
  fecha_aprobacion: string;

  @IsInt()
  @IsNotEmpty()
  id_responsable: number;
}