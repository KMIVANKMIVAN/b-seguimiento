import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EstadosDerivsService } from './estados-derivs.service';
import { CreateEstadosDerivDto } from './dto/create-estados-deriv.dto';
import { UpdateEstadosDerivDto } from './dto/update-estados-deriv.dto';

@Controller('estadosderivs')
export class EstadosDerivsController {
  constructor(private readonly estadosDerivsService: EstadosDerivsService) { }

  @Post()
  create(@Body() createEstadosDerivDto: CreateEstadosDerivDto) {
    return this.estadosDerivsService.create(createEstadosDerivDto);
  }

  @Get()
  findAll() {
    return this.estadosDerivsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.estadosDerivsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateEstadosDerivDto: UpdateEstadosDerivDto) {
    return this.estadosDerivsService.update(+id, updateEstadosDerivDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.estadosDerivsService.remove(+id);
  }
}
