import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConvsInvsService } from './convs-invs.service';
import { CreateConvsInvDto } from './dto/create-convs-inv.dto';
import { UpdateConvsInvDto } from './dto/update-convs-inv.dto';

@Controller('convs-invs')
export class ConvsInvsController {
  constructor(private readonly convsInvsService: ConvsInvsService) {}

  @Post()
  create(@Body() createConvsInvDto: CreateConvsInvDto) {
    return this.convsInvsService.create(createConvsInvDto);
  }

  @Get()
  findAll() {
    return this.convsInvsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.convsInvsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConvsInvDto: UpdateConvsInvDto) {
    return this.convsInvsService.update(+id, updateConvsInvDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.convsInvsService.remove(+id);
  }
}
