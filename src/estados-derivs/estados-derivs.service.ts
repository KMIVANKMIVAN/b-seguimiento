import { Injectable } from '@nestjs/common';
import { CreateEstadosDerivDto } from './dto/create-estados-deriv.dto';
import { UpdateEstadosDerivDto } from './dto/update-estados-deriv.dto';

@Injectable()
export class EstadosDerivsService {
  create(createEstadosDerivDto: CreateEstadosDerivDto) {
    return 'This action adds a new estadosDeriv';
  }

  findAll() {
    return `This action returns all estadosDerivs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} estadosDeriv`;
  }

  update(id: number, updateEstadosDerivDto: UpdateEstadosDerivDto) {
    return `This action updates a #${id} estadosDeriv`;
  }

  remove(id: number) {
    return `This action removes a #${id} estadosDeriv`;
  }
}
