import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEntidadeDto } from './dto/create-entidade.dto';
import { UpdateEntidadeDto } from './dto/update-entidade.dto';
import { Entidade } from './entities/entidade.entity';

@Injectable()
export class EntidadesService {
  constructor(
    @InjectRepository(Entidade)
    private readonly entidadeRepository: Repository<Entidade>,
  ) { }

  async create(createEntidadeDto: CreateEntidadeDto) {
    try {
      const newEntidade = this.entidadeRepository.create(createEntidadeDto);
      return await this.entidadeRepository.save(newEntidade);
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      } else if (error instanceof UnauthorizedException) {
        throw error;
      } else {
        throw new InternalServerErrorException({
          statusCode: 500,
          error: `Error del Servidor en (create): ${error}`,
          message: `Error del Servidor en (create): ${error}`,
        });
      }
    }
  }

  async findAll(): Promise<Entidade[]> {
    try {
      const entidad = await this.entidadeRepository.find();
      if (entidad.length === 0) {
        throw new BadRequestException({
          statusCode: 400,
          error: `No se encontraron entidads.`,
          message: `No se encontraron entidads.`,
        });
      }
      return entidad;
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      } else {
        throw new InternalServerErrorException({
          statusCode: 500,
          error: `Error del Servidor en (findAll): ${error}`,
          message: `Error del Servidor en (findAll): ${error}`,
        });
      }
    }
  }


  async findOne(id: number) {
    try {
      const entidad = await this.entidadeRepository.findOne({ where: { id } });
      if (!entidad) {
        throw new BadRequestException({
          statusCode: 400,
          error: `El entidad con ID ${id} NO Existe`,
          message: `entidad con ID ${id} no fue encontrado`,
        });
      }
      return entidad;
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      } else {
        throw new InternalServerErrorException({
          statusCode: 500,
          error: `Error del Servidor en (findOne): ${error}`,
          message: `Error del Servidor en (findOne): ${error}`,
        });
      }
    }
  }

  async update(id: number, updateEntidadeDto: UpdateEntidadeDto) {
    try {
      const existingEntidade = await this.findOne(id);
      const updateResult = await this.entidadeRepository.update(id, updateEntidadeDto);
      if (updateResult.affected === 0) {
        throw new BadRequestException({
          statusCode: 400,
          error: `El Entidade con ID ${id} NO se actualizo correctamente`,
          message: `Entidade con ID ${id} no se actualizo correctamente`,
        });
      }
      return this.findOne(id);
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      } else if (error.code === 'CONNECTION_ERROR') {
        throw new InternalServerErrorException({
          statusCode: 500,
          error: `Error del Servidor en (update) NO SE CONECTO A LA BASE DE DATOS`,
          message: `Error del Servidor en (update) NO SE CONECTO A LA BASE DE DATOS`,
        });
      } else {
        throw new InternalServerErrorException({
          statusCode: 500,
          error: `Error del Servidor en (update): ${error}`,
          message: `Error del Servidor en (update): ${error}`,
        });
      }
    }
  }

  async remove(id: number) {
    try {
      await this.entidadeRepository.delete(id);
      return { success: true, message: `Se elimino el entidad con ID: ${id}` };
    } catch (error) {
      throw new Error(
        `No se pudo eliminar el entidad. Usuario con ID ${id} no encontrado`,
      );
    }
  }
}
