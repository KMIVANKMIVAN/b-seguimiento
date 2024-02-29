import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateConvenioDto } from './dto/create-convenio.dto';
import { UpdateConvenioDto } from './dto/update-convenio.dto';
import { Convenio } from './entities/convenio.entity';

@Injectable()
export class ConveniosService {
  constructor(
    @InjectRepository(Convenio)
    private readonly convenioRepository: Repository<Convenio>,
  ) { }
  async create(createConvenioDto: CreateConvenioDto) {
    try {
      const newConvenio = this.convenioRepository.create(createConvenioDto);
      return await this.convenioRepository.save(newConvenio);
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

  async findAll(): Promise<Convenio[]> {
    try {
      const convenio = await this.convenioRepository.find();
      if (convenio.length === 0) {
        throw new BadRequestException({
          statusCode: 400,
          error: `No se encontraron convenios.`,
          message: `No se encontraron convenios.`,
        });
      }
      return convenio;
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
      const convenio = await this.convenioRepository.findOne({ where: { id } });
      if (!convenio) {
        throw new BadRequestException({
          statusCode: 400,
          error: `El Convenio con ID ${id} NO Existe`,
          message: `Convenio con ID ${id} no fue encontrado`,
        });
      }
      return convenio;
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

  async update(id: number, updateConvenioDto: UpdateConvenioDto) {
    try {
      const existingConvenio = await this.findOne(id);
      const updateResult = await this.convenioRepository.update(id, updateConvenioDto);
      if (updateResult.affected === 0) {
        throw new BadRequestException({
          statusCode: 400,
          error: `El Convenio con ID ${id} NO se actualizo correctamente`,
          message: `Convenio con ID ${id} no se actualizo correctamente`,
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
      await this.convenioRepository.delete(id);
      return { success: true, message: `Se elimino el convenio con ID: ${id}` };
    } catch (error) {
      throw new Error(
        `No se pudo eliminar el convenio. Usuario con ID ${id} no encontrado`,
      );
    }
  }
}
