import { IsString, IsInt, IsNotEmpty, MaxLength } from 'class-validator';

export class CreateRegistrosCgeDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50, { message: "La longitud máxima es de 50 caracteres" })
  cod_nro: string;

  @IsInt()
  @IsNotEmpty()
  id_estado: number;
}
