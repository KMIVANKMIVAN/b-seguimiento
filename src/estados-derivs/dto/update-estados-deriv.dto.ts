import { PartialType } from '@nestjs/mapped-types';
import { CreateEstadosDerivDto } from './create-estados-deriv.dto';

export class UpdateEstadosDerivDto extends PartialType(CreateEstadosDerivDto) {}
