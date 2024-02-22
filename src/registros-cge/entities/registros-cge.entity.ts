import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
import { EstadosDeriv } from '../../estados-derivs/entities/estados-deriv.entity'; // Importa la entidad del estado si es necesario

@Entity("registro_CGE")
export class RegistroCGE {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: false, length: 254 })
  cod_nro: string;

  @OneToOne(() => EstadosDeriv)
  @JoinColumn({ name: 'id_estado' }) // Nombre de la columna en la tabla registro_CGE que contiene la clave externa
  estado: EstadosDeriv; // Propiedad que representa la relación en la entidad RegistroCGE
}
