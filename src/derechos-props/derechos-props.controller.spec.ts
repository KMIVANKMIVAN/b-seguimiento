import { Test, TestingModule } from '@nestjs/testing';
import { DerechosPropsController } from './derechos-props.controller';
import { DerechosPropsService } from './derechos-props.service';

describe('DerechosPropsController', () => {
  let controller: DerechosPropsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DerechosPropsController],
      providers: [DerechosPropsService],
    }).compile();

    controller = module.get<DerechosPropsController>(DerechosPropsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
