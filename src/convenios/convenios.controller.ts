import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConveniosService } from './convenios.service';
import { CreateConvenioDto } from './dto/create-convenio.dto';
import { UpdateConvenioDto } from './dto/update-convenio.dto';

@Controller('convenios')
export class ConveniosController {
  constructor(private readonly conveniosService: ConveniosService) {}

  @Post()
  create(@Body() createConvenioDto: CreateConvenioDto) {
    return this.conveniosService.create(createConvenioDto);
  }

  @Get()
  findAll() {
    return this.conveniosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.conveniosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConvenioDto: UpdateConvenioDto) {
    return this.conveniosService.update(+id, updateConvenioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.conveniosService.remove(+id);
  }
}
