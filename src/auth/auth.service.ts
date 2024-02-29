import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsuariosService } from '../usuarios/usuarios.service';
import * as bcrypt from 'bcrypt';

import { JwtService } from '@nestjs/jwt'
import { Usuario } from '../usuarios/entities/usuario.entity';
@Injectable()
export class AuthService {

    constructor(
        private usuariosService: UsuariosService,
        private jwtService: JwtService) { }

    async validateUser(nombre_usuario: string, contrasenia: string): Promise<any> {
        console.log("entro")
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
    async generateJWT(user: Usuario) {
        const payload = { sub: user.id, username: user.nombre_usuario };
        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }
}
