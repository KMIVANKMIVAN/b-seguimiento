import { Strategy } from 'passport-local'
import { PassportStrategy } from '@nestjs/passport'
import { AuthService } from '../auth.service'
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(
        private authService: AuthService,
    ) {
        super({
            usernameField: 'nombre_usuario', 
            passwordField: 'contrasenia', 
        });
    }
    async validate(nombre_usuario: string, contrasenia: string) {
        console.log("sdf")
        const user = await this.authService.validateUser(nombre_usuario, contrasenia);
        if (!user) {
            throw new UnauthorizedException("usuario no autorizado");
        }
        return user
    }

}