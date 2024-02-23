import {Strategy} from 'passport-local'
import {PassportStrategy} from '@nestjs/passport'
import { AuthService } from '../auth.service'
import { Injectable, UnauthorizedException} from '@nestjs/common'

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(private authService:AuthService){
        super()
    }

    async validate(nombre_usuario:string, contrasenia:string){
        const usuario=this.authService.validateUser(nombre_usuario,contrasenia);
        if(!usuario){
            throw new UnauthorizedException("usuario no autorizado");
        }
        return usuario
    }

}