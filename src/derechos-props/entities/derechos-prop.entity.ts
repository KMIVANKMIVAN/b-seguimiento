// export class DerechosProp {}
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Proyecto } from '../../proyectos/entities/proyecto.entity';


@Entity("derecho_propietario")
export class DerechosProp {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: false, length: 100 })
  fuente_verificador: string;

  @Column({ type: 'varchar', nullable: false, length: 100 })
  llenado_anexos: string;

  @ManyToOne(() => Proyecto, proyecto => proyecto.derechosProps)
  @JoinColumn({ name: 'id_proyecto' })
  proyecto: Proyecto;
}