import { Injectable, UnauthorizedException} from '@nestjs/common';
import { UsuariosService } from '../usuarios/usuarios.service';
import bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
    
    constructor(private usuariosService:UsuariosService){}
    
    async validateUser(nombre_usuario: string, contrasenia:string):Promise<any>{
        const user=await this.usuariosService.findOneByUserName(nombre_usuario);
        if(!user){
            throw new UnauthorizedException(`nombre de usuario inexistente`)
        }

        const isMatch=await bcrypt.compare(contrasenia,user.contrasenia);
        if(user &&  isMatch){
            return user;
        }
        return null;
    }
}
