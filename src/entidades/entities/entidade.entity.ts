// export class Entidade {}
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne } from 'typeorm';
import { EstadosDeriv } from '../../estados-derivs/entities/estados-deriv.entity';
import { Convenio } from "../../convenios/entities/convenio.entity";

@Entity("entidades")
export class Entidade {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: false, length: 254 })
  nombre: string;

  @Column({ type: 'varchar', nullable: false, length: 254 })
  tipo_entidad: string;

  @OneToOne(() => EstadosDeriv, estadosDeriv => estadosDeriv.entidade) // Relación uno a uno con EstadosDeriv
  estadosDeriv: EstadosDeriv; // Propiedad que representa la relación

  @OneToMany(() => Convenio, convenio => convenio.entidad)
  convenios: Convenio[];
}
