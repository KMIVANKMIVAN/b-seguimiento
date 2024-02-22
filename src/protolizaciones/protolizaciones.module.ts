import { Module } from '@nestjs/common';
import { ProtolizacionesService } from './protolizaciones.service';
import { ProtolizacionesController } from './protolizaciones.controller';
import { Protolizacione } from './entities/protolizacione.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forFeature([Protolizacione])],
  controllers: [ProtolizacionesController],
  providers: [ProtolizacionesService],
})
export class ProtolizacionesModule {}
