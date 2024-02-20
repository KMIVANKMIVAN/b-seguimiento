import { Test, TestingModule } from '@nestjs/testing';
import { EstadosDerivsService } from './estados-derivs.service';

describe('EstadosDerivsService', () => {
  let service: EstadosDerivsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EstadosDerivsService],
    }).compile();

    service = module.get<EstadosDerivsService>(EstadosDerivsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
