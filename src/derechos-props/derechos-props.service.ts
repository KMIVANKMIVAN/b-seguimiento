import { Injectable } from '@nestjs/common';
import { CreateDerechosPropDto } from './dto/create-derechos-prop.dto';
import { UpdateDerechosPropDto } from './dto/update-derechos-prop.dto';

@Injectable()
export class DerechosPropsService {
  create(createDerechosPropDto: CreateDerechosPropDto) {
    return 'This action adds a new derechosProp';
  }

  findAll() {
    return `This action returns all derechosProps`;
  }

  findOne(id: number) {
    return `This action returns a #${id} derechosProp`;
  }

  update(id: number, updateDerechosPropDto: UpdateDerechosPropDto) {
    return `This action updates a #${id} derechosProp`;
  }

  remove(id: number) {
    return `This action removes a #${id} derechosProp`;
  }
}
