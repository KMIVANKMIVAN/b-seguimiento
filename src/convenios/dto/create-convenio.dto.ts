// export class CreateConvenioDto {}
import { IsString, IsInt, IsNotEmpty, MaxLength, IsDate, IsOptional } from 'class-validator';

export class CreateConvenioDto {
  @IsDate()
  @IsNotEmpty()
  fecha_suscripcion: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(20, { message: "La longitud máxima es de 20 caracteres" })
  tipo: string;

  @IsInt()
  @IsOptional()
  id_proyecto: number;

  @IsInt()
  @IsOptional()
  id_entidad: number;
}