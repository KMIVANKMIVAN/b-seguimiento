import { PartialType } from '@nestjs/mapped-types';
import { CreateDerechosPropDto } from './create-derechos-prop.dto';

export class UpdateDerechosPropDto extends PartialType(CreateDerechosPropDto) {}
