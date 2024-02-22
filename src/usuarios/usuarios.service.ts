import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';


@Injectable()
export class UsuariosService {

  /* constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>
  ){}

  async create(createUsuarioDto: CreateUsuarioDto):Promise<Usuario>{
    const usuarioExists=this.usuarioRepository.findOne({
      where: { nombre_usuario: createUsuarioDto.nombre_usuario },
    })
    if (usuarioExists) {
      throw new BadRequestException({
        statusCode: 400,
        error: `El Usuario con nombre ${createUsuarioDto.nombre_usuario} YA EXISTE`,
        message: `El Usuario con nombre ${createUsuarioDto.nombre_usuario} YA FUE REGISTRADO`,
      });
    }
    
    return
  }

  findAll() {
    return `This action returns all usuarios`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usuario`;
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `This action updates a #${id} usuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  } */
}

