import { PartialType } from '@nestjs/mapped-types';
import { CreateProcesosContraDto } from './create-procesos-contra.dto';

export class UpdateProcesosContraDto extends PartialType(CreateProcesosContraDto) {}
