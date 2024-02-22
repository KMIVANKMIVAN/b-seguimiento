import { Module } from '@nestjs/common';
import { ConsultasExternasService } from './consultas-externas.service';
import { ConsultasExternasController } from './consultas-externas.controller';
import { ConsultasExterna } from './entities/consultas-externa.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forFeature([ConsultasExterna])],
  controllers: [ConsultasExternasController],
  providers: [ConsultasExternasService],
})
export class ConsultasExternasModule { }
