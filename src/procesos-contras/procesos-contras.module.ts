import { Module } from '@nestjs/common';
import { ProcesosContrasService } from './procesos-contras.service';
import { ProcesosContrasController } from './procesos-contras.controller';

@Module({
  controllers: [ProcesosContrasController],
  providers: [ProcesosContrasService],
})
export class ProcesosContrasModule {}
