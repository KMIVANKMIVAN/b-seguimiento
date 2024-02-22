import { Module } from '@nestjs/common';
import { RegistrosCgeService } from './registros-cge.service';
import { RegistrosCgeController } from './registros-cge.controller';
import { RegistroCGE } from './entities/registros-cge.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forFeature([RegistroCGE])],
  controllers: [RegistrosCgeController],
  providers: [RegistrosCgeService],
})
export class RegistrosCgeModule {}
