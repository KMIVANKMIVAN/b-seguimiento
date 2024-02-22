import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConsultasExternasService } from './consultas-externas.service';

@Controller('consultasexternas')
export class ConsultasExternasController {
  constructor(private readonly consultasExternasService: ConsultasExternasService) { }

  /* @Post()
  create(@Body() createConsultasExternaDto: CreateConsultasExternaDto) {
    return this.consultasExternasService.create(createConsultasExternaDto);
  } */

  /* @Get()
  findAll() {
    return this.consultasExternasService.findAll();
  } */
  @Get('proyectos/:contcod')
  buscarProyecto(@Param('contcod') contcod: string) {
    return this.consultasExternasService.buscarProyecto(contcod);
  }
  @Get('test-connection')
  async testDatabaseConnection(): Promise<string> {
    const isConnected = await this.consultasExternasService.testConnection();
    return isConnected ? 'Conexión exitosa' : 'Error al conectar con la base de datos';
  }
  @Get('proyectos')
  async consultarProyectosExcel() {
    return this.consultasExternasService.consultarProyectosExcel();
  }

  /* @Get(':id')
  findOne(@Param('id') id: string) {
    return this.consultasExternasService.findOne(+id);
  } */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.consultasExternasService.findOne(+id);
  }

  /* @Patch(':id')
  update(@Param('id') id: string, @Body() updateConsultasExternaDto: UpdateConsultasExternaDto) {
    return this.consultasExternasService.update(+id, updateConsultasExternaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.consultasExternasService.remove(+id);
  } */
}
