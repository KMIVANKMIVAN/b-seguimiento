import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
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

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [ConveniosModule, EntidadesModule, EstadosDerivsModule, RegistrosCgeModule, ConvsInvsModule, ProtolizacionesModule, ProyectosModule, ProcesosContrasModule, UsuariosModule, DerechosPropsModule, RolesModule, GruposModule],
})
export class AppModule { }
