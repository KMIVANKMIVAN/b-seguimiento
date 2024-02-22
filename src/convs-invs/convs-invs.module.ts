import { Module } from '@nestjs/common';
import { ConvsInvsService } from './convs-invs.service';
import { ConvsInvsController } from './convs-invs.controller';
import { ConvsInv } from './entities/convs-inv.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forFeature([ConvsInv])], // Asegúrate de que esta línea esté descomentada
  controllers: [ConvsInvsController],
  providers: [ConvsInvsService],
})
export class ConvsInvsModule {}
