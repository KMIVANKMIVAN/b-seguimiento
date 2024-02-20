import { PartialType } from '@nestjs/mapped-types';
import { CreateRegistrosCgeDto } from './create-registros-cge.dto';

export class UpdateRegistrosCgeDto extends PartialType(CreateRegistrosCgeDto) {}
