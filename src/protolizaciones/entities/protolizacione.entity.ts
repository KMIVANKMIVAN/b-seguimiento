// export class Protolizacione {}
import { Entity, PrimaryGeneratedColumn, OneToOne, Column, ManyToOne, JoinColumn } from 'typeorm';
import { EstadosDeriv } from '../../estados-derivs/entities/estados-deriv.entity';
@Entity("protocolizaciones")
export class Protolizacione {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: false, length: 20 })
  estado_tramite: string;

  @Column({ type: 'date', nullable: false })
  fecha_presentacion: string;

  @Column({ type: 'date', nullable: false })
  fecha_firma: string;

  @Column({ type: 'date', nullable: false })
  fecha_entrega: string;

  @OneToOne(() => EstadosDeriv, estadosDeriv => estadosDeriv.protolizacione) // Relación uno a uno con EstadosDeriv
  @JoinColumn({ name: 'id_estado' }) // Columna que almacena la clave externa en la tabla Protolizacione
  estadosDeriv: EstadosDeriv; // Propiedad que representa la relación
}