// export class Convenio {}
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Proyecto } from '../../proyectos/entities/proyecto.entity';
import { Entidade } from "../../entidades/entities/entidade.entity";

@Entity("convenios")
export class Convenio {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: false, length: 20 })
  tipo: string;

  @ManyToOne(() => Proyecto, proyecto => proyecto.procesosContra)
  @JoinColumn({ name: 'id_proyecto' })
  proyecto: Proyecto;

  @ManyToOne(() => Entidade, entidad => entidad.convenios)
  @JoinColumn({ name: 'id_entidad' })
  entidad: Entidade;
}