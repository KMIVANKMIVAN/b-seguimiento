// export class ProcesosContra {}
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Proyecto } from '../../proyectos/entities/proyecto.entity';
import { ConvsInv } from "../../convs-invs/entities/convs-inv.entity";
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

  @OneToMany(() => ConvsInv, convsInv => convsInv.procesoContra) // Relación OneToMany con ConvsInv
  convsInvs: ConvsInv[]; // Propiedad que representa la relación con ConvsInv
}

