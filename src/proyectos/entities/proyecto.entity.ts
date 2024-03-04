// export class Proyecto {}
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { ProcesosContra } from '../../procesos-contras/entities/procesos-contra.entity';
import { Convenio } from "../../convenios/entities/convenio.entity";
import { DerechosProp } from "../../derechos-props/entities/derechos-prop.entity";
import { Usuario } from "../../usuarios/entities/usuario.entity";

@Entity("proyectos")
export class Proyecto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: false, length: 50 })
  codigo: string;

  @Column({ type: 'varchar', nullable: false, length: 500 })
  nombre: string;

  @Column({ type: 'int', nullable: false})
  gestion: number;

  @Column({ type: 'date', nullable: true })
  fecha_aprobacion: string;

  @Column({ type: 'int', nullable: true })
  id_responsable: number;

  @OneToMany(() => ProcesosContra, procesoContra => procesoContra.proyecto)
  procesosContra: ProcesosContra[];

  @OneToMany(() => Convenio, convenio => convenio.proyecto)
  convenios: Convenio[];

  @OneToMany(() => DerechosProp, derechosProp => derechosProp.proyecto)
  derechosProps: DerechosProp[];

  @ManyToOne(() => Usuario, usuario => usuario.proyectos) // Relación ManyToOne con Usuario
  @JoinColumn({ name: 'id_responsable'}) // Columna que contiene la clave externa
  responsable: Usuario; // Propiedad que representa la relación con Usuario
}
