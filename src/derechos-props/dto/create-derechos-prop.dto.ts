// export class CreateDerechosPropDto {}
import { IsString, IsInt, IsNotEmpty, MaxLength, IsDate, IsOptional } from 'class-validator';

export class CreateDerechosPropDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100, { message: "La longitud máxima es de 100 caracteres" })
  fuente_verificador: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100, { message: "La longitud máxima es de 100 caracteres" })
  llenado_anexos: string;

  @IsInt()
  @IsNotEmpty()
  id_proyecto: number;
}