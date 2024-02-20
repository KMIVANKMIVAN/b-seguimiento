import { Module } from '@nestjs/common';
import { UsuariosRolesService } from './usuarios-roles.service';
import { UsuariosRolesController } from './usuarios-roles.controller';

@Module({
  controllers: [UsuariosRolesController],
  providers: [UsuariosRolesService],
})
export class UsuariosRolesModule {}
