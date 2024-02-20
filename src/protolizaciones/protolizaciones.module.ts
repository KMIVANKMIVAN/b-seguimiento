import { Module } from '@nestjs/common';
import { ProtolizacionesService } from './protolizaciones.service';
import { ProtolizacionesController } from './protolizaciones.controller';

@Module({
  controllers: [ProtolizacionesController],
  providers: [ProtolizacionesService],
})
export class ProtolizacionesModule {}
