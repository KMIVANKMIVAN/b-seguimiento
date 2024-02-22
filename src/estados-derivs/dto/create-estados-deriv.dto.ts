// export class CreateEstadosDerivDto {}
import { IsString, IsInt, IsNotEmpty, MaxLength, IsDate, IsOptional } from 'class-validator';

export class CreateEstadosDerivDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(20, { message: "La longitud máxima es de 50 caracteres" })
  estado: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50, { message: "La longitud máxima es de 50 caracteres" })
  cod_resolucion_nota: string;

  @IsDate()
  @IsNotEmpty()
  fecha: string;

  @IsInt()
  @IsNotEmpty()
  id_conv_invi: number;

  @IsInt()
  @IsOptional()
  id_entidad: number;
  
}
