import { Test, TestingModule } from '@nestjs/testing';
import { RegistrosCgeController } from './registros-cge.controller';
import { RegistrosCgeService } from './registros-cge.service';

describe('RegistrosCgeController', () => {
  let controller: RegistrosCgeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RegistrosCgeController],
      providers: [RegistrosCgeService],
    }).compile();

    controller = module.get<RegistrosCgeController>(RegistrosCgeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
