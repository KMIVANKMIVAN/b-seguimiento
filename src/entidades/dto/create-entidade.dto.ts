// export class CreateEntidadeDto {}
import { IsString, IsNotEmpty, MaxLength } from 'class-validator';

export class CreateEntidadeDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50, { message: "La longitud máxima es de 50 caracteres" })
  nombre: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50, { message: "La longitud máxima es de 50 caracteres" })
  tipo_entidad: number;
}