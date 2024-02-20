import { Injectable } from '@nestjs/common';
import { CreateRegistrosCgeDto } from './dto/create-registros-cge.dto';
import { UpdateRegistrosCgeDto } from './dto/update-registros-cge.dto';

@Injectable()
export class RegistrosCgeService {
  create(createRegistrosCgeDto: CreateRegistrosCgeDto) {
    return 'This action adds a new registrosCge';
  }

  findAll() {
    return `This action returns all registrosCge`;
  }

  findOne(id: number) {
    return `This action returns a #${id} registrosCge`;
  }

  update(id: number, updateRegistrosCgeDto: UpdateRegistrosCgeDto) {
    return `This action updates a #${id} registrosCge`;
  }

  remove(id: number) {
    return `This action removes a #${id} registrosCge`;
  }
}
