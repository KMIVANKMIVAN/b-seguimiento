import { PartialType } from '@nestjs/mapped-types';
import { CreateProtolizacioneDto } from './create-protolizacione.dto';

export class UpdateProtolizacioneDto extends PartialType(CreateProtolizacioneDto) {}
