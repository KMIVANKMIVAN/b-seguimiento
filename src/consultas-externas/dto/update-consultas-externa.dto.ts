import { PartialType } from '@nestjs/mapped-types';
import { CreateConsultasExternaDto } from './create-consultas-externa.dto';

export class UpdateConsultasExternaDto extends PartialType(CreateConsultasExternaDto) {}
