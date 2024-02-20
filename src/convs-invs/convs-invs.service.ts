import { Injectable } from '@nestjs/common';
import { CreateConvsInvDto } from './dto/create-convs-inv.dto';
import { UpdateConvsInvDto } from './dto/update-convs-inv.dto';

@Injectable()
export class ConvsInvsService {
  create(createConvsInvDto: CreateConvsInvDto) {
    return 'This action adds a new convsInv';
  }

  findAll() {
    return `This action returns all convsInvs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} convsInv`;
  }

  update(id: number, updateConvsInvDto: UpdateConvsInvDto) {
    return `This action updates a #${id} convsInv`;
  }

  remove(id: number) {
    return `This action removes a #${id} convsInv`;
  }
}
