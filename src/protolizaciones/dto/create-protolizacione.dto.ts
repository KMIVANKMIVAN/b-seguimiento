// export class CreateProtolizacioneDto {}
import { IsString, IsInt, IsNotEmpty, MaxLength, IsDate, IsOptional } from 'class-validator';

export class CreateProtolizacioneDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(20, { message: "La longitud máxima es de 20 caracteres" })
  estado_tramite: string;

  @IsDate()
  @IsNotEmpty()
  fecha_presentacion: string;

  @IsDate()
  @IsNotEmpty()
  fecha_firma: string;

  @IsDate()
  @IsNotEmpty()
  fecha_entrega: string;

  @IsInt()
  @IsOptional()
  id_estado: number;
}
