import { Module } from '@nestjs/common';
import { DerechosPropsService } from './derechos-props.service';
import { DerechosPropsController } from './derechos-props.controller';

@Module({
  controllers: [DerechosPropsController],
  providers: [DerechosPropsService],
})
export class DerechosPropsModule {}
