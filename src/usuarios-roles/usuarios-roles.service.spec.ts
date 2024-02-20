import { Test, TestingModule } from '@nestjs/testing';
import { UsuariosRolesService } from './usuarios-roles.service';

describe('UsuariosRolesService', () => {
  let service: UsuariosRolesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsuariosRolesService],
    }).compile();

    service = module.get<UsuariosRolesService>(UsuariosRolesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
