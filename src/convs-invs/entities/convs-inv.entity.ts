// export class ConvsInv {}
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { EstadosDeriv } from '../../estados-derivs/entities/estados-deriv.entity';

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

  @Column({ type: 'int', nullable: false })
  id_proceso: number;

  @OneToMany(() => EstadosDeriv, convsInv => convsInv.estadosDeriv)
  convsInvs: ConvsInv[];
}

