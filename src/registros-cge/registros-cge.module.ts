import { Module } from '@nestjs/common';
import { RegistrosCgeService } from './registros-cge.service';
import { RegistrosCgeController } from './registros-cge.controller';

@Module({
  controllers: [RegistrosCgeController],
  providers: [RegistrosCgeService],
})
export class RegistrosCgeModule {}
