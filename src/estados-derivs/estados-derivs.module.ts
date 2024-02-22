import { Module } from '@nestjs/common';
import { EstadosDerivsService } from './estados-derivs.service';
import { EstadosDerivsController } from './estados-derivs.controller';
import { EstadosDeriv } from './entities/estados-deriv.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forFeature([EstadosDeriv])],
  controllers: [EstadosDerivsController],
  providers: [EstadosDerivsService],
})
export class EstadosDerivsModule {}
