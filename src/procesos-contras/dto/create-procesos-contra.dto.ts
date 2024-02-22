// export class CreateProcesosContraDto {}
import { IsString, IsInt, IsNotEmpty, MaxLength, IsDate, IsOptional } from 'class-validator';

export class CreateProcesosContraDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(20, { message: "La longitud máxima es de 20 caracteres" })
  tipo: string;

  @IsInt()
  @IsOptional()
  id_proyecto: number;
}
