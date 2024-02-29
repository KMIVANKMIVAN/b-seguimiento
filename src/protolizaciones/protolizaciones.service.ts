import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProtolizacioneDto } from './dto/create-protolizacione.dto';
import { UpdateProtolizacioneDto } from './dto/update-protolizacione.dto';
import { Protolizacione } from './entities/protolizacione.entity';

@Injectable()
export class ProtolizacionesService {
  constructor(
    @InjectRepository(Protolizacione)
    private readonly protolizacioneRepository: Repository<Protolizacione>,
  ) { }
  async create(createProtolizacioneDto: CreateProtolizacioneDto) {
    try {
      const newProtolizacione = this.protolizacioneRepository.create(createProtolizacioneDto);
      return await this.protolizacioneRepository.save(newProtolizacione);
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

  async findAll(): Promise<Protolizacione[]> {
    try {
      const protolizacione = await this.protolizacioneRepository.find();
      if (protolizacione.length === 0) {
        throw new BadRequestException({
          statusCode: 400,
          error: `No se encontraron protolizaciones.`,
          message: `No se encontraron protolizaciones.`,
        });
      }
      return protolizacione;
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
      const protolizacione = await this.protolizacioneRepository.findOne({ where: { id } });
      if (!protolizacione) {
        throw new BadRequestException({
          statusCode: 400,
          error: `El protolizacione con ID ${id} NO Existe`,
          message: `protolizacione con ID ${id} no fue encontrado`,
        });
      }
      return protolizacione;
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

  async update(id: number, updateProtolizacioneDto: UpdateProtolizacioneDto) {
    try {
      const existingProtolizacione = await this.findOne(id);
      const updateResult = await this.protolizacioneRepository.update(id, updateProtolizacioneDto);
      if (updateResult.affected === 0) {
        throw new BadRequestException({
          statusCode: 400,
          error: `El Protolizacione con ID ${id} NO se actualizo correctamente`,
          message: `Protolizacione con ID ${id} no se actualizo correctamente`,
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
      await this.protolizacioneRepository.delete(id);
      return { success: true, message: `Se elimino el Protolizacione con ID: ${id}` };
    } catch (error) {
      throw new Error(
        `No se pudo eliminar el Protolizacione. Usuario con ID ${id} no encontrado`,
      );
    }
  }
}
