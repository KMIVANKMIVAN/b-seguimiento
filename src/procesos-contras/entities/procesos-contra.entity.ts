// export class ProcesosContra {}
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Proyecto } from '../../proyectos/entities/proyecto.entity';

@Entity("proceso_contra")
export class ProcesosContra {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: false, length: 20 })
  tipo: string;

  @Column({ type: 'int', nullable: false })
  id_proyecto: number;

  @ManyToOne(() => Proyecto, proyecto => proyecto.procesosContra)
  @JoinColumn({ name: 'id_proyecto' })
  proyecto: Proyecto;
}

