import { Test, TestingModule } from '@nestjs/testing';
import { ConvsInvsController } from './convs-invs.controller';
import { ConvsInvsService } from './convs-invs.service';

describe('ConvsInvsController', () => {
  let controller: ConvsInvsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConvsInvsController],
      providers: [ConvsInvsService],
    }).compile();

    controller = module.get<ConvsInvsController>(ConvsInvsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
