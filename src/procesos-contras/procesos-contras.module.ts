import { Module } from '@nestjs/common';
import { ProcesosContrasService } from './procesos-contras.service';
import { ProcesosContrasController } from './procesos-contras.controller';
import { ProcesosContra } from './entities/procesos-contra.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forFeature([ProcesosContra])],
  controllers: [ProcesosContrasController],
  providers: [ProcesosContrasService],
})
export class ProcesosContrasModule {}
