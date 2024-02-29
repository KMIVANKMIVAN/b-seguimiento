import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateConvsInvDto } from './dto/create-convs-inv.dto';
import { UpdateConvsInvDto } from './dto/update-convs-inv.dto';
import { ConvsInv } from './entities/convs-inv.entity';

@Injectable()
export class ConvsInvsService {
  constructor(
    @InjectRepository(ConvsInv)
    private readonly convsInvRepository: Repository<ConvsInv>,
  ) { }
  async create(createConvsInvDto: CreateConvsInvDto) {
    try {
      const newConvsInv = this.convsInvRepository.create(createConvsInvDto);
      return await this.convsInvRepository.save(newConvsInv);
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

  async findAll(): Promise<ConvsInv[]> {
    try {
      const convsInv = await this.convsInvRepository.find();
      if (convsInv.length === 0) {
        throw new BadRequestException({
          statusCode: 400,
          error: `No se encontraron convsInvs.`,
          message: `No se encontraron convsInvs.`,
        });
      }
      return convsInv;
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
      const convsInv = await this.convsInvRepository.findOne({ where: { id } });
      if (!convsInv) {
        throw new BadRequestException({
          statusCode: 400,
          error: `El convsInv con ID ${id} NO Existe`,
          message: `convsInv con ID ${id} no fue encontrado`,
        });
      }
      return convsInv;
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

  async update(id: number, updateConvsInvDto: UpdateConvsInvDto) {
    try {
      const existingConvsInv = await this.findOne(id);
      const updateResult = await this.convsInvRepository.update(id, updateConvsInvDto);
      if (updateResult.affected === 0) {
        throw new BadRequestException({
          statusCode: 400,
          error: `El ConvsInv con ID ${id} NO se actualizo correctamente`,
          message: `ConvsInv con ID ${id} no se actualizo correctamente`,
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
      await this.convsInvRepository.delete(id);
      return { success: true, message: `Se elimino el ConvsInv con ID: ${id}` };
    } catch (error) {
      throw new Error(
        `No se pudo eliminar el ConvsInv. Usuario con ID ${id} no encontrado`,
      );
    }
  }
}
