import { Test, TestingModule } from '@nestjs/testing';
import { ConvsInvsService } from './convs-invs.service';

describe('ConvsInvsService', () => {
  let service: ConvsInvsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConvsInvsService],
    }).compile();

    service = module.get<ConvsInvsService>(ConvsInvsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
