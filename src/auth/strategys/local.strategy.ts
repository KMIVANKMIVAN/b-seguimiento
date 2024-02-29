import { Strategy } from 'passport-local'
import { PassportStrategy } from '@nestjs/passport'
import { AuthService } from '../auth.service'
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'local') {
    constructor(
        private authService: AuthService,
    ) {
        super()
    }

    async validate(nombre_usuario: string, contrasenia: string) {
        console.log(":XCg");
        const token = this.authService.signIn(nombre_usuario, contrasenia);
        return token
    }

}