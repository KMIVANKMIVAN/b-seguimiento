import { Module } from '@nestjs/common';
import { ConvsInvsService } from './convs-invs.service';
import { ConvsInvsController } from './convs-invs.controller';

@Module({
  controllers: [ConvsInvsController],
  providers: [ConvsInvsService],
})
export class ConvsInvsModule {}
