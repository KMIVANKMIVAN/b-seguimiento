// export class CreateProyectoDto {}
import { IsString, IsInt, IsNotEmpty, MaxLength, IsDate, IsOptional } from 'class-validator';

export class CreateProyectoDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50, { message: "La longitud máxima es de 500 caracteres" })
  codigo: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(500, { message: "La longitud máxima es de 500 caracteres" })
  nombre: string;

  @IsInt()
  @IsNotEmpty()
  @MaxLength(10, { message: "La longitud máxima es de 10 caracteres" })
  gestion: number;

  @IsDate()
  @IsOptional()
  fecha_aprobacion: string;

  @IsInt()
  @IsOptional()
  id_responsable: number;
}