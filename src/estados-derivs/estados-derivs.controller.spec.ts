import { Test, TestingModule } from '@nestjs/testing';
import { EstadosDerivsController } from './estados-derivs.controller';
import { EstadosDerivsService } from './estados-derivs.service';

describe('EstadosDerivsController', () => {
  let controller: EstadosDerivsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstadosDerivsController],
      providers: [EstadosDerivsService],
    }).compile();

    controller = module.get<EstadosDerivsController>(EstadosDerivsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
