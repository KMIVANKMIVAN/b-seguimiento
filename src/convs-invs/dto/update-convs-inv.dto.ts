import { PartialType } from '@nestjs/mapped-types';
import { CreateConvsInvDto } from './create-convs-inv.dto';

export class UpdateConvsInvDto extends PartialType(CreateConvsInvDto) {}
