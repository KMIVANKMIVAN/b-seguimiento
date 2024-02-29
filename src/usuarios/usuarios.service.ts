import { BadRequestException, NotFoundException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';




@Injectable()
export class UsuariosService {

  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>
  ) { }

  async userValidate(nombre_usuario: string, ci: number, complemento: string, correo: string): Promise<void> {
    const userExists = await this.usuarioRepository.findOne({
      where: { nombre_usuario: nombre_usuario },
    });
    if (userExists) {
      throw new BadRequestException({
        statusCode: 400,
        error: `El Usuario con nombre ${nombre_usuario} YA EXISTE`,
        message: `El Usuario con nombre ${nombre_usuario} YA FUE REGISTRADO`,
      });
    }
    const userCorreoExists = await this.usuarioRepository.findOne({
      where: { correo: correo },
    });
    if (userCorreoExists) {
      throw new BadRequestException({
        statusCode: 400,
        error: `El Usuario con correo ${correo} YA EXISTE`,
        message: `El Usuario con correo ${correo} YA FUE REGISTRADO`,
      });
    }
    const userCedulaIdentidadExists = await this.usuarioRepository.findOne({
      where: { ci: ci, complemento: complemento },
    });
    if (userCedulaIdentidadExists) {
      throw new BadRequestException({
        statusCode: 400,
        error: `El Usuario con carnet ${ci} ${complemento} YA EXISTE`,
        message: `El Usuario con carnet  ${ci} ${complemento} YA FUE REGISTRADO`,
      });
    }

  }

  async create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    this.userValidate(
      createUsuarioDto.nombre_usuario,
      createUsuarioDto.ci,
      createUsuarioDto.complemento,
      createUsuarioDto.correo)

    const hashedPassword = await bcrypt.hash(createUsuarioDto.contrasenia, 10);
    const userCreated = this.usuarioRepository.create({ ...createUsuarioDto, contrasenia: hashedPassword })

    return this.usuarioRepository.save(userCreated)
  }

  async findAll(): Promise<Usuario[]> {
    const users = await this.usuarioRepository.find();
    return users || [];
  }

  async findOne(id: number): Promise<Usuario | undefined> {
    const user = await this.usuarioRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException({
        error: `El Usuario con ID ${id} NO Existe`,
        message: `Usuario con ID ${id} no fue encontrado`,
      });
    }
    return user;
  }

  async findOneNomCi(nomci: string): Promise<Usuario[] | undefined> {
    const users = await this.usuarioRepository.createQueryBuilder('usuarios')
      .where('usuarios.nombre_usuario ILIKE :nomci', { nomci: `%${nomci}%` })
      .orWhere('CAST(usuarios.ci AS TEXT) LIKE :nomci', { nomci: `%${nomci}%` }) // Convierte `ci` a texto
      .take(5)
      .getMany();
    if (!users) {
      throw new NotFoundException({
        error: `El Usuario con dato ${nomci} NO Existe`,
        message: `Usuario con dato ${nomci} no fue encontrado`,
      });
    }
    return users;
  }

  async findOneByUserName(nombre_usuario: string): Promise<Usuario> {
    return this.usuarioRepository.findOne({ where: { nombre_usuario } })
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto): Promise<Usuario> {
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
    }
    const userUpdated = Object.assign(user, updateUsuarioDto);
    return await this.usuarioRepository.save(userUpdated);
  }

  async remove(id: number): Promise<string> {
    try {
      await this.usuarioRepository.delete(id);
      return `Se elimino el usuario con ID: ${id}`
    } catch (error) {
      throw new Error(
        `No se pudo eliminar el usuario. Usuario con ID ${id} no encontrado`,
      );
    }
  }
}

