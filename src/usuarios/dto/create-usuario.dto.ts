import { IsEmail, IsNotEmpty, IsString, MaxLength,MinLength, IsBoolean, IsNumber} from 'class-validator';

export class CreateUsuarioDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50,{message:'La longitud maxima es de 50 caracteres'})
  nombre_usuario: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50,{message:'La longitud maxima es de 50 caracteres'})
  nombres: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50,{message:'La longitud maxima es de 50 caracteres'})
  apellidos: string;

  @IsNumber()
  @IsNotEmpty()
  ci: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(2,{message:'La longitud maxima es de 2 caracteres'})
  complemento: string;

  @IsEmail()
  @IsNotEmpty()
  correo: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(20,{message:'La longitud maxima es de 50 caracteres'})
  @MinLength(8,{message:'Longitud minima 8 caracteres'})
  contrasenia: string;

  @IsString()
  @IsBoolean()
  estado: boolean;
}