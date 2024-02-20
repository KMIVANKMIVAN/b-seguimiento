import { Test, TestingModule } from '@nestjs/testing';
import { DerechosPropsService } from './derechos-props.service';

describe('DerechosPropsService', () => {
  let service: DerechosPropsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DerechosPropsService],
    }).compile();

    service = module.get<DerechosPropsService>(DerechosPropsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
