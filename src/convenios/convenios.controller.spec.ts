import { Test, TestingModule } from '@nestjs/testing';
import { ConveniosController } from './convenios.controller';
import { ConveniosService } from './convenios.service';

describe('ConveniosController', () => {
  let controller: ConveniosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConveniosController],
      providers: [ConveniosService],
    }).compile();

    controller = module.get<ConveniosController>(ConveniosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
