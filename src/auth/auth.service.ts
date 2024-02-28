import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsuariosService } from '../usuarios/usuarios.service';
import bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {

    constructor(
        private usuariosService: UsuariosService,
        private jwtService: JwtService) { }

    async validateUser(nombre_usuario: string, contrasenia: string): Promise<any> {
        const user = await this.usuariosService.findOneByUserName(nombre_usuario);
        if (user) {
            const isMatch = await bcrypt.compare(contrasenia, user.contrasenia);
            if (isMatch) {
                const { contrasenia, ...result } = user
                return result;
            }
        }
        return null;
    }
    async signIn(
        username: string,
        pass: string,
    ): Promise<{ access_token: string }> {
        const user = await this.usuariosService.findOneByUserName(username);
        if (user) {
            const isMatch = await bcrypt.compare(pass, user.contrasenia);
            if (isMatch) {
                const payload = { sub: user.id, username: user.nombre_usuario };
                return {
                    access_token: await this.jwtService.signAsync(payload),
                };
            }
        }
        throw new UnauthorizedException("usuario no autorizado");
    }

}
