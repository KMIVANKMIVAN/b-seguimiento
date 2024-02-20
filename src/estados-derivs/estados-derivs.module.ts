import { Module } from '@nestjs/common';
import { EstadosDerivsService } from './estados-derivs.service';
import { EstadosDerivsController } from './estados-derivs.controller';

@Module({
  controllers: [EstadosDerivsController],
  providers: [EstadosDerivsService],
})
export class EstadosDerivsModule {}
