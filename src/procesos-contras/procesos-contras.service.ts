import { Injectable } from '@nestjs/common';
import { CreateProcesosContraDto } from './dto/create-procesos-contra.dto';
import { UpdateProcesosContraDto } from './dto/update-procesos-contra.dto';

@Injectable()
export class ProcesosContrasService {
  create(createProcesosContraDto: CreateProcesosContraDto) {
    return 'This action adds a new procesosContra';
  }

  findAll() {
    return `This action returns all procesosContras`;
  }

  findOne(id: number) {
    return `This action returns a #${id} procesosContra`;
  }

  update(id: number, updateProcesosContraDto: UpdateProcesosContraDto) {
    return `This action updates a #${id} procesosContra`;
  }

  remove(id: number) {
    return `This action removes a #${id} procesosContra`;
  }
}
