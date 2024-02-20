import { Injectable } from '@nestjs/common';
import { CreateProtolizacioneDto } from './dto/create-protolizacione.dto';
import { UpdateProtolizacioneDto } from './dto/update-protolizacione.dto';

@Injectable()
export class ProtolizacionesService {
  create(createProtolizacioneDto: CreateProtolizacioneDto) {
    return 'This action adds a new protolizacione';
  }

  findAll() {
    return `This action returns all protolizaciones`;
  }

  findOne(id: number) {
    return `This action returns a #${id} protolizacione`;
  }

  update(id: number, updateProtolizacioneDto: UpdateProtolizacioneDto) {
    return `This action updates a #${id} protolizacione`;
  }

  remove(id: number) {
    return `This action removes a #${id} protolizacione`;
  }
}
