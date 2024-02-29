import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEstadosDerivDto } from './dto/create-estados-deriv.dto';
import { UpdateEstadosDerivDto } from './dto/update-estados-deriv.dto';
import { EstadosDeriv } from './entities/estados-deriv.entity';

@Injectable()
export class EstadosDerivsService {
  constructor(
    @InjectRepository(EstadosDeriv)
    private readonly estadosDerivRepository: Repository<EstadosDeriv>,
  ) { }
  async create(createEstadosDerivDto: CreateEstadosDerivDto) {
    try {
      const newEstadosDeriv = this.estadosDerivRepository.create(createEstadosDerivDto);
      return await this.estadosDerivRepository.save(newEstadosDeriv);
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

  async findAll(): Promise<EstadosDeriv[]> {
    try {
      const estadosDeriv = await this.estadosDerivRepository.find();
      if (estadosDeriv.length === 0) {
        throw new BadRequestException({
          statusCode: 400,
          error: `No se encontraron estadosDerivs.`,
          message: `No se encontraron estadosDerivs.`,
        });
      }
      return estadosDeriv;
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
      const estadosDeriv = await this.estadosDerivRepository.findOne({ where: { id } });
      if (!estadosDeriv) {
        throw new BadRequestException({
          statusCode: 400,
          error: `El estadosDeriv con ID ${id} NO Existe`,
          message: `estadosDeriv con ID ${id} no fue encontrado`,
        });
      }
      return estadosDeriv;
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

  async update(id: number, updateEstadosDerivDto: UpdateEstadosDerivDto) {
    try {
      const existingEstadosDeriv = await this.findOne(id);
      const updateResult = await this.estadosDerivRepository.update(id, updateEstadosDerivDto);
      if (updateResult.affected === 0) {
        throw new BadRequestException({
          statusCode: 400,
          error: `El EstadosDeriv con ID ${id} NO se actualizo correctamente`,
          message: `EstadosDeriv con ID ${id} no se actualizo correctamente`,
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
      await this.estadosDerivRepository.delete(id);
      return { success: true, message: `Se elimino el EstadosDeriv con ID: ${id}` };
    } catch (error) {
      throw new Error(
        `No se pudo eliminar el EstadosDeriv. Usuario con ID ${id} no encontrado`,
      );
    }
  }
}
