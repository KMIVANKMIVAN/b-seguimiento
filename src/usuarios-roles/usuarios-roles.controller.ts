import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsuariosRolesService } from './usuarios-roles.service';
import { CreateUsuariosRoleDto } from './dto/create-usuarios-role.dto';
import { UpdateUsuariosRoleDto } from './dto/update-usuarios-role.dto';

@Controller('usuarios-roles')
export class UsuariosRolesController {
  constructor(private readonly usuariosRolesService: UsuariosRolesService) {}

  @Post()
  create(@Body() createUsuariosRoleDto: CreateUsuariosRoleDto) {
    return this.usuariosRolesService.create(createUsuariosRoleDto);
  }

  @Get()
  findAll() {
    return this.usuariosRolesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuariosRolesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsuariosRoleDto: UpdateUsuariosRoleDto) {
    return this.usuariosRolesService.update(+id, updateUsuariosRoleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuariosRolesService.remove(+id);
  }
}
