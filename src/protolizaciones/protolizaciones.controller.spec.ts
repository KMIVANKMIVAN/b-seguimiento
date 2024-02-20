import { Test, TestingModule } from '@nestjs/testing';
import { ProtolizacionesController } from './protolizaciones.controller';
import { ProtolizacionesService } from './protolizaciones.service';

describe('ProtolizacionesController', () => {
  let controller: ProtolizacionesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProtolizacionesController],
      providers: [ProtolizacionesService],
    }).compile();

    controller = module.get<ProtolizacionesController>(ProtolizacionesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
