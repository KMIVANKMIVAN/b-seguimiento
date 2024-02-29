import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DerechosPropsService } from './derechos-props.service';
import { CreateDerechosPropDto } from './dto/create-derechos-prop.dto';
import { UpdateDerechosPropDto } from './dto/update-derechos-prop.dto';

@Controller('derechosprops')
export class DerechosPropsController {
  constructor(private readonly derechosPropsService: DerechosPropsService) {}

  @Post()
  create(@Body() createDerechosPropDto: CreateDerechosPropDto) {
    return this.derechosPropsService.create(createDerechosPropDto);
  }

  @Get()
  findAll() {
    return this.derechosPropsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.derechosPropsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDerechosPropDto: UpdateDerechosPropDto) {
    return this.derechosPropsService.update(+id, updateDerechosPropDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.derechosPropsService.remove(+id);
  }
}
