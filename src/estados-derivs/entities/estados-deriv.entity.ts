// export class EstadosDeriv {}
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Entidade } from '../../entidades/entities/entidade.entity'; // Importa la entidad del estado si es necesario
import { ConvsInv } from "../../convs-invs/entities/convs-inv.entity";
@Entity("estados_derivs")
export class EstadosDeriv {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: false, length: 20 })
  estado: string;

  @Column({ type: 'varchar', nullable: false, length: 50 })
  cod_resolucion_nota: string;

  @Column({ type: 'date', nullable: false })
  fecha: string;

  @ManyToOne(() => Entidade, entidade => entidade.estados) // Relación ManyToOne con la entidad Entidade
  @JoinColumn({ name: 'id_entidad' }) // Nombre de la columna en la tabla estados_derivs que contiene la clave externa
  entidad: Entidade; // Propiedad que representa la relación en la entidad EstadosDeriv

  @ManyToOne(() => ConvsInv, estadosDeriv => estadosDeriv.convsInvs)
  @JoinColumn({ name: 'id_estados_deriv' })
  estadosDeriv: EstadosDeriv;
}
