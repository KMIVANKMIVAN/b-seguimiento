import { PartialType } from '@nestjs/mapped-types';
import { CreateUsuariosRoleDto } from './create-usuarios-role.dto';

export class UpdateUsuariosRoleDto extends PartialType(CreateUsuariosRoleDto) {}
