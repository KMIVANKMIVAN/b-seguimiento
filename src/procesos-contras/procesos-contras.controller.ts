import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProcesosContrasService } from './procesos-contras.service';
import { CreateProcesosContraDto } from './dto/create-procesos-contra.dto';
import { UpdateProcesosContraDto } from './dto/update-procesos-contra.dto';

@Controller('procesoscontras')
export class ProcesosContrasController {
  constructor(private readonly procesosContrasService: ProcesosContrasService) {}

  @Post()
  create(@Body() createProcesosContraDto: CreateProcesosContraDto) {
    return this.procesosContrasService.create(createProcesosContraDto);
  }

  @Get()
  findAll() {
    return this.procesosContrasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.procesosContrasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProcesosContraDto: UpdateProcesosContraDto) {
    return this.procesosContrasService.update(+id, updateProcesosContraDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.procesosContrasService.remove(+id);
  }
}
