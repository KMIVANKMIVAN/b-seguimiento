import { Module } from '@nestjs/common';
import { EntidadesService } from './entidades.service';
import { EntidadesController } from './entidades.controller';
import { Entidade } from './entities/entidade.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forFeature([Entidade])],
  controllers: [EntidadesController],
  providers: [EntidadesService],
})
export class EntidadesModule {}
