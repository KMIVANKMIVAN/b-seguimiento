import { Test, TestingModule } from '@nestjs/testing';
import { RegistrosCgeService } from './registros-cge.service';

describe('RegistrosCgeService', () => {
  let service: RegistrosCgeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RegistrosCgeService],
    }).compile();

    service = module.get<RegistrosCgeService>(RegistrosCgeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
