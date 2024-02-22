// export class ConvsInv {}
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { EstadosDeriv } from '../../estados-derivs/entities/estados-deriv.entity';
import { ProcesosContra } from "../../procesos-contras/entities/procesos-contra.entity";
@Entity("conv_invi")
export class ConvsInv {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', nullable: false })
  nro_p: number;

  @Column({ type: 'int', nullable: false, default: 1 })
  nro_s: number;

  @Column({ type: 'varchar', nullable: false, length: 500 })
  obj_contratacion: string;

  @OneToMany(() => EstadosDeriv, convsInv => convsInv.estadosDeriv)
  convsInvs: ConvsInv[];

  @ManyToOne(() => ProcesosContra, procesoContra => procesoContra.convsInvs) // Relación ManyToOne con ProcesosContra
  @JoinColumn({ name: 'id_proceso' }) // Nombre de la columna que contiene la clave externa
  procesoContra: ProcesosContra; // Propiedad que representa la relación con ProcesosContra
}

