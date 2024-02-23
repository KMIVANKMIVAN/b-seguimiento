import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ConfigService } from '@nestjs/config';

import { ConveniosModule } from './convenios/convenios.module';
import { EntidadesModule } from './entidades/entidades.module';
import { EstadosDerivsModule } from './estados-derivs/estados-derivs.module';
import { RegistrosCgeModule } from './registros-cge/registros-cge.module';
import { ConvsInvsModule } from './convs-invs/convs-invs.module';
import { ProtolizacionesModule } from './protolizaciones/protolizaciones.module';
import { ProyectosModule } from './proyectos/proyectos.module';
import { ProcesosContrasModule } from './procesos-contras/procesos-contras.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { DerechosPropsModule } from './derechos-props/derechos-props.module';
import { RolesModule } from './roles/roles.module';
import { GruposModule } from './grupos/grupos.module';

import { Convenio } from "./convenios/entities/convenio.entity";
import { Entidade } from "./entidades/entities/entidade.entity";
import { EstadosDeriv } from "./estados-derivs/entities/estados-deriv.entity";
import { RegistroCGE } from "./registros-cge/entities/registros-cge.entity";
import { ConvsInv } from "./convs-invs/entities/convs-inv.entity";
import { Protolizacione } from "./protolizaciones/entities/protolizacione.entity";
import { Proyecto } from "./proyectos/entities/proyecto.entity";
import { ProcesosContra } from "./procesos-contras/entities/procesos-contra.entity";
import { Usuario } from "./usuarios/entities/usuario.entity";
import { DerechosProp } from "./derechos-props/entities/derechos-prop.entity";
import { Role } from "./roles/entities/role.entity";
// import {  } from "./grupos/entities/grupo.entity";
import { ConsultasExternasModule } from './consultas-externas/consultas-externas.module';
import { AuthModule } from './auth/auth.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  // imports: [ConveniosModule, EntidadesModule, EstadosDerivsModule, RegistrosCgeModule, ConvsInvsModule, ProtolizacionesModule, ProyectosModule, ProcesosContrasModule, UsuariosModule, DerechosPropsModule, RolesModule, GruposModule],
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),

    ConveniosModule, EntidadesModule, EstadosDerivsModule, RegistrosCgeModule, ConvsInvsModule, ProtolizacionesModule, ProyectosModule, ProcesosContrasModule, UsuariosModule, DerechosPropsModule, RolesModule, GruposModule,
    TypeOrmModule.forRoot({
      type: 'postgres', // Tipo de base de datos
      host: '10.10.1.158', // IP de la base de datos
      port: 5432, // Puerto estándar de PostgreSQL
      username: 'postgres', // Nombre de usuario para la conexión
      password: 'postgresql', // Contraseña del usuario
      database: 'seguimiento', // Nombre de la base de datos
      entities: [Convenio, Entidade, EstadosDeriv, RegistroCGE, ConvsInv, Protolizacione, Proyecto, ProcesosContra, Usuario, DerechosProp, Role],
      synchronize: true, // Utilizar 'false' en producción
    }),
    ConsultasExternasModule,
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        logging: true,
        entities: [],
        synchronize: false,
        multipleStatements: true,
        name: 'cuadroConnection',
        type: 'mysql',
        host: configService.get<string>('IPBASEDEDATOS'),
        port: 3306,
        username: 'root',
        password: configService.get<string>('DATABASECUADROPASSWORD'),
        database: configService.get<string>('DATABASECUADRO'),
      }),
    }),
    AuthModule,
    // Incluye tus otros módulos aquí...
  ],
})
export class AppModule { }
