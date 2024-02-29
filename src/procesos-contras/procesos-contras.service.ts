import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProcesosContraDto } from './dto/create-procesos-contra.dto';
import { UpdateProcesosContraDto } from './dto/update-procesos-contra.dto';
import { ProcesosContra } from './entities/procesos-contra.entity';

@Injectable()
export class ProcesosContrasService {
  constructor(
    @InjectRepository(ProcesosContra)
    private readonly procesosContraRepository: Repository<ProcesosContra>,
  ) { }
  async create(createProcesosContraDto: CreateProcesosContraDto) {
    try {
      const newProcesosContra = this.procesosContraRepository.create(createProcesosContraDto);
      return await this.procesosContraRepository.save(newProcesosContra);
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

  async findAll(): Promise<ProcesosContra[]> {
    try {
      const procesosContra = await this.procesosContraRepository.find();
      if (procesosContra.length === 0) {
        throw new BadRequestException({
          statusCode: 400,
          error: `No se encontraron procesosContras.`,
          message: `No se encontraron procesosContras.`,
        });
      }
      return procesosContra;
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
      const procesosContra = await this.procesosContraRepository.findOne({ where: { id } });
      if (!procesosContra) {
        throw new BadRequestException({
          statusCode: 400,
          error: `El procesosContra con ID ${id} NO Existe`,
          message: `procesosContra con ID ${id} no fue encontrado`,
        });
      }
      return procesosContra;
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

  async update(id: number, updateProcesosContraDto: UpdateProcesosContraDto) {
    try {
      const existingProcesosContra = await this.findOne(id);
      const updateResult = await this.procesosContraRepository.update(id, updateProcesosContraDto);
      if (updateResult.affected === 0) {
        throw new BadRequestException({
          statusCode: 400,
          error: `El ProcesosContra con ID ${id} NO se actualizo correctamente`,
          message: `ProcesosContra con ID ${id} no se actualizo correctamente`,
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
      await this.procesosContraRepository.delete(id);
      return { success: true, message: `Se elimino el ProcesosContra con ID: ${id}` };
    } catch (error) {
      throw new Error(
        `No se pudo eliminar el ProcesosContra. Usuario con ID ${id} no encontrado`,
      );
    }
  }
}
