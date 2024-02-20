import { Test, TestingModule } from '@nestjs/testing';
import { ProcesosContrasController } from './procesos-contras.controller';
import { ProcesosContrasService } from './procesos-contras.service';

describe('ProcesosContrasController', () => {
  let controller: ProcesosContrasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProcesosContrasController],
      providers: [ProcesosContrasService],
    }).compile();

    controller = module.get<ProcesosContrasController>(ProcesosContrasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
