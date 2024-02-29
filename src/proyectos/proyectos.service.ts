import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProyectoDto } from './dto/create-proyecto.dto';
import { UpdateProyectoDto } from './dto/update-proyecto.dto';
import { Proyecto } from './entities/proyecto.entity';

@Injectable()
export class ProyectosService {
  constructor(
    @InjectRepository(Proyecto)
    private readonly proyectoRepository: Repository<Proyecto>,
  ) { }
  async create(createProyectoDto: CreateProyectoDto) {
    try {
      const newProyecto = this.proyectoRepository.create(createProyectoDto);
      return await this.proyectoRepository.save(newProyecto);
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

  async findAll(): Promise<Proyecto[]> {
    try {
      const proyecto = await this.proyectoRepository.find();
      if (proyecto.length === 0) {
        throw new BadRequestException({
          statusCode: 400,
          error: `No se encontraron proyectos.`,
          message: `No se encontraron proyectos.`,
        });
      }
      return proyecto;
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
      const proyecto = await this.proyectoRepository.findOne({ where: { id } });
      if (!proyecto) {
        throw new BadRequestException({
          statusCode: 400,
          error: `El proyecto con ID ${id} NO Existe`,
          message: `proyecto con ID ${id} no fue encontrado`,
        });
      }
      return proyecto;
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

  async update(id: number, updateProyectoDto: UpdateProyectoDto) {
    try {
      const existingProyecto = await this.findOne(id);
      const updateResult = await this.proyectoRepository.update(id, updateProyectoDto);
      if (updateResult.affected === 0) {
        throw new BadRequestException({
          statusCode: 400,
          error: `El Proyecto con ID ${id} NO se actualizo correctamente`,
          message: `Proyecto con ID ${id} no se actualizo correctamente`,
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
      await this.proyectoRepository.delete(id);
      // return `Se elimino el proyecto con ID: ${id}`
      return { success: true, message: `Se elimino el proyecto con ID: ${id}` };
    } catch (error) {
      throw new Error(
        `No se pudo eliminar el proyecto. Usuario con ID ${id} no encontrado`,
      );
    }
  }
}
