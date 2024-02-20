import { Test, TestingModule } from '@nestjs/testing';
import { ProtolizacionesService } from './protolizaciones.service';

describe('ProtolizacionesService', () => {
  let service: ProtolizacionesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProtolizacionesService],
    }).compile();

    service = module.get<ProtolizacionesService>(ProtolizacionesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
