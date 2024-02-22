import { Module } from '@nestjs/common';
import { DerechosPropsService } from './derechos-props.service';
import { DerechosPropsController } from './derechos-props.controller';
import { DerechosProp } from './entities/derechos-prop.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forFeature([DerechosProp])],
  controllers: [DerechosPropsController],
  providers: [DerechosPropsService],
})
export class DerechosPropsModule {}
