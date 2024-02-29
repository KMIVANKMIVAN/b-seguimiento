import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDerechosPropDto } from './dto/create-derechos-prop.dto';
import { UpdateDerechosPropDto } from './dto/update-derechos-prop.dto';
import { DerechosProp } from './entities/derechos-prop.entity';

@Injectable()
export class DerechosPropsService {
  constructor(
    @InjectRepository(DerechosProp)
    private readonly derechosPropRepository: Repository<DerechosProp>,
  ) { }
  async create(createDerechosPropDto: CreateDerechosPropDto) {
    try {
      const newDerechosProp = this.derechosPropRepository.create(createDerechosPropDto);
      return await this.derechosPropRepository.save(newDerechosProp);
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

  async findAll(): Promise<DerechosProp[]> {
    try {
      const derechosProp = await this.derechosPropRepository.find();
      if (derechosProp.length === 0) {
        throw new BadRequestException({
          statusCode: 400,
          error: `No se encontraron derechosProps.`,
          message: `No se encontraron derechosProps.`,
        });
      }
      return derechosProp;
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
      const derechosProp = await this.derechosPropRepository.findOne({ where: { id } });
      if (!derechosProp) {
        throw new BadRequestException({
          statusCode: 400,
          error: `El derechosProp con ID ${id} NO Existe`,
          message: `derechosProp con ID ${id} no fue encontrado`,
        });
      }
      return derechosProp;
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

  async update(id: number, updateDerechosPropDto: UpdateDerechosPropDto) {
    try {
      const existingDerechosProp = await this.findOne(id);
      const updateResult = await this.derechosPropRepository.update(id, updateDerechosPropDto);
      if (updateResult.affected === 0) {
        throw new BadRequestException({
          statusCode: 400,
          error: `El derechosProp con ID ${id} NO se actualizo correctamente`,
          message: `derechosProp con ID ${id} no se actualizo correctamente`,
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
      await this.derechosPropRepository.delete(id);
      return { success: true, message: `Se elimino el derechosProp con ID: ${id}` };
    } catch (error) {
      throw new Error(
        `No se pudo eliminar el derechosProp. Usuario con ID ${id} no encontrado`,
      );
    }
  }
}
