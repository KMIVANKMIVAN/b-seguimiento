import { Module } from '@nestjs/common';
import { ConveniosService } from './convenios.service';
import { ConveniosController } from './convenios.controller';
import { Convenio } from './entities/convenio.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Convenio])], // Asegúrate de que esta línea esté descomentada
  controllers: [ConveniosController],
  providers: [ConveniosService],
})
export class ConveniosModule {}
