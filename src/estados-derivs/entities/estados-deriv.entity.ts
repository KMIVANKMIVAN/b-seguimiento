// export class EstadosDeriv {}
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
import { Entidade } from '../../entidades/entities/entidade.entity'; // Importa la entidad del estado si es necesario
import { ConvsInv } from "../../convs-invs/entities/convs-inv.entity";
import { Protolizacione } from "../../protolizaciones/entities/protolizacione.entity";
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

  @OneToOne(() => Entidade) // Relación uno a uno con Entidade
  @JoinColumn({ name: 'id_entidad' }) // Columna que almacena la clave externa en la tabla EstadosDeriv
  entidade: Entidade; // Propiedad que representa la relación

  @ManyToOne(() => ConvsInv, estadosDeriv => estadosDeriv.convsInvs)
  @JoinColumn({ name: 'id_estados_deriv' })
  estadosDeriv: EstadosDeriv;

  @OneToOne(() => Protolizacione, protolizacione => protolizacione.estadosDeriv) // Relación uno a uno con Protolizacione
  protolizacione: Protolizacione; // Propiedad que representa la relación
}
