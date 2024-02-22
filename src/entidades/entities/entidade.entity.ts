// export class Entidade {}
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
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

  @OneToMany(() => EstadosDeriv, estados => estados.entidad)
  estados: EstadosDeriv[];

  @OneToMany(() => Convenio, convenio => convenio.entidad)
  convenios: Convenio[];
}
