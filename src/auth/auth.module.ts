import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { AuthService } from './auth.service';
import { UsuariosModule } from '../usuarios/usuarios.module';
import { LocalStrategy } from './strategys/local.strategy';

@Module({
  imports:[UsuariosModule,PassportModule],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
