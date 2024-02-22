// export class CreateConvsInvDto {}
import { IsString, IsInt, IsNotEmpty, MaxLength, IsDate, IsOptional } from 'class-validator';

export class CreateConvsInvDto {
  @IsInt()
  @IsNotEmpty()
  nro_p: number;

  @IsInt()
  @IsNotEmpty()
  nro_s: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(500, { message: "La longitud máxima es de 50 caracteres" })
  obj_contratacion: string;

  @IsInt()
  @IsOptional()
  id_proceso: number;
}
