// export class Proyecto {}
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { ProcesosContra } from '../../procesos-contras/entities/procesos-contra.entity';
import { Convenio } from "../../convenios/entities/convenio.entity";
import { DerechosProp } from "../../derechos-props/entities/derechos-prop.entity";

@Entity("proceso_contra")
export class Proyecto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: false, length: 500 })
  nombre: string;

  @Column({ type: 'varchar', nullable: false, length: 10 })
  gestion: string;

  @Column({ type: 'date', nullable: false })
  fecha_aprobacion: string;

  @Column({ type: 'int', nullable: false })
  id_responsable: number;

  @OneToMany(() => ProcesosContra, procesoContra => procesoContra.proyecto)
  procesosContra: ProcesosContra[];

  @OneToMany(() => Convenio, convenio => convenio.proyecto)
  convenios: Convenio[];

  @OneToMany(() => DerechosProp, derechosProp => derechosProp.proyecto)
  derechosProps: DerechosProp[];

  /* @ManyToOne(() => ,  => .)
  @JoinColumn({ name: 'id_proyecto' })
  : ; */
}
