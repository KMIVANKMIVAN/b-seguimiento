import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProtolizacionesService } from './protolizaciones.service';
import { CreateProtolizacioneDto } from './dto/create-protolizacione.dto';
import { UpdateProtolizacioneDto } from './dto/update-protolizacione.dto';

@Controller('protolizaciones')
export class ProtolizacionesController {
  constructor(private readonly protolizacionesService: ProtolizacionesService) {}

  @Post()
  create(@Body() createProtolizacioneDto: CreateProtolizacioneDto) {
    return this.protolizacionesService.create(createProtolizacioneDto);
  }

  @Get()
  findAll() {
    return this.protolizacionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.protolizacionesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProtolizacioneDto: UpdateProtolizacioneDto) {
    return this.protolizacionesService.update(+id, updateProtolizacioneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.protolizacionesService.remove(+id);
  }
}
