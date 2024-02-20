import { Test, TestingModule } from '@nestjs/testing';
import { UsuariosRolesController } from './usuarios-roles.controller';
import { UsuariosRolesService } from './usuarios-roles.service';

describe('UsuariosRolesController', () => {
  let controller: UsuariosRolesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsuariosRolesController],
      providers: [UsuariosRolesService],
    }).compile();

    controller = module.get<UsuariosRolesController>(UsuariosRolesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
