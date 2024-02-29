import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRegistrosCgeDto } from './dto/create-registros-cge.dto';
import { UpdateRegistrosCgeDto } from './dto/update-registros-cge.dto';
import { RegistroCGE } from './entities/registros-cge.entity';

@Injectable()
export class RegistrosCgeService {
  constructor(
    @InjectRepository(RegistroCGE)
    private readonly registroCGERepository: Repository<RegistroCGE>,
  ) { }
  async create(createRegistrosCgeDto: CreateRegistrosCgeDto) {
    try {
      const newRegistroCGE = this.registroCGERepository.create(createRegistrosCgeDto);
      return await this.registroCGERepository.save(newRegistroCGE);
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

  async findAll(): Promise<RegistroCGE[]> {
    try {
      const registroCGE = await this.registroCGERepository.find();
      if (registroCGE.length === 0) {
        throw new BadRequestException({
          statusCode: 400,
          error: `No se encontraron registroCGEs.`,
          message: `No se encontraron registroCGEs.`,
        });
      }
      return registroCGE;
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
      const registroCGE = await this.registroCGERepository.findOne({ where: { id } });
      if (!registroCGE) {
        throw new BadRequestException({
          statusCode: 400,
          error: `El registroCGE con ID ${id} NO Existe`,
          message: `registroCGE con ID ${id} no fue encontrado`,
        });
      }
      return registroCGE;
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

  async update(id: number, updateRegistrosCgeDto: UpdateRegistrosCgeDto) {
    try {
      const existingRegistroCGE = await this.findOne(id);
      const updateResult = await this.registroCGERepository.update(id, updateRegistrosCgeDto);
      if (updateResult.affected === 0) {
        throw new BadRequestException({
          statusCode: 400,
          error: `El RegistroCGE con ID ${id} NO se actualizo correctamente`,
          message: `RegistroCGE con ID ${id} no se actualizo correctamente`,
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
      await this.registroCGERepository.delete(id);
      return { success: true, message: `Se elimino el RegistroCGE con ID: ${id}` };
    } catch (error) {
      throw new Error(
        `No se pudo eliminar el RegistroCGE. Usuario con ID ${id} no encontrado`,
      );
    }
  }
}
