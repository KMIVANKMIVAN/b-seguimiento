import { Test, TestingModule } from '@nestjs/testing';
import { ProcesosContrasService } from './procesos-contras.service';

describe('ProcesosContrasService', () => {
  let service: ProcesosContrasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProcesosContrasService],
    }).compile();

    service = module.get<ProcesosContrasService>(ProcesosContrasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
