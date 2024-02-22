import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConsultasExterna } from './entities/consultas-externa.entity';
import { Connection } from 'typeorm';

@Injectable()
export class ConsultasExternasService {
  constructor(
    private connection: Connection,
  ) { }

  /* findAll() {
    return `This action returns all consultasExternas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} consultasExterna`;
  } */
  async testConnection(): Promise<boolean> {
    try {
      await this.connection.query('SELECT 1'); // Consulta de prueba para verificar la conexión
      return true; // Si la consulta se ejecuta correctamente, la conexión es exitosa
    } catch (error) {
      console.error('Error de conexión a la base de datos:', error);
      return false; // Si hay un error al ejecutar la consulta, la conexión falla
    }
  }

  async buscarProyecto(contcod: string): Promise<ConsultasExterna[]> {
    try {
      console.log("hola");

      const sql = `SELECT *
      FROM cuadro.proyectosexcel;
      `;
      const result = await this.connection.query(sql);
      if (result.length === 0) {
        throw new BadRequestException({
          statusCode: 400,
          error: `No se encontraron datos para el código ${contcod}`,
          message: `No se encontraron datos para el código ${contcod} sin datos`,
        });
      }
      return result;
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      } else if (error.code === 'CONNECTION_ERROR') {
        throw new InternalServerErrorException({
          statusCode: 500,
          error: `Error del Servidor en (buscarProyecto) NO SE CONECTO A LA BASE DE DATOS`,
          message: `Error del Servidor en (buscarProyecto) NO SE CONECTO A LA BASE DE DATOS`,
        });
      } else {
        throw new InternalServerErrorException({
          statusCode: 500,
          error: `Error del Servidor en (buscarProyecto): ${error}`,
          message: `Error del Servidor en (buscarProyecto): ${error}`,
        });
      }
    }
  }

  async consultarProyectosExcel(): Promise<any[]> {
    try {
      const sql = `SELECT *
      FROM users u ;
      `;
      const result = await this.connection.query(sql);
      return result;
    } catch (error) {
      throw new InternalServerErrorException({
        statusCode: 500,
        error: 'Error al consultar los proyectos desde la base de datos',
        message: `Error al consultar los proyectos desde la base de datos: ${error}`,
      });
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} consultasExterna`;
  }

}
