import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RegistrosCgeService } from './registros-cge.service';
import { CreateRegistrosCgeDto } from './dto/create-registros-cge.dto';
import { UpdateRegistrosCgeDto } from './dto/update-registros-cge.dto';

@Controller('registroscge')
export class RegistrosCgeController {
  constructor(private readonly registrosCgeService: RegistrosCgeService) {}

  @Post()
  create(@Body() createRegistrosCgeDto: CreateRegistrosCgeDto) {
    return this.registrosCgeService.create(createRegistrosCgeDto);
  }

  @Get()
  findAll() {
    return this.registrosCgeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.registrosCgeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateRegistrosCgeDto: UpdateRegistrosCgeDto) {
    return this.registrosCgeService.update(+id, updateRegistrosCgeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.registrosCgeService.remove(+id);
  }
}
