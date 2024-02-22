import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { Role } from '../../roles/entities/role.entity';
import { Proyecto } from "../../proyectos/entities/proyecto.entity";

@Entity("usuarios")
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50, unique: true })
  nombre_usuario: string;

  @Column({ type: 'varchar', length: 50 })
  nombres: string;

  @Column({ type: 'varchar', length: 50 })
  apellidos: string;
  
  @Column({ type: 'int'})
  ci: number;

  @Column({ type: 'varchar', length:2 })
  complemento: string;

  @Column({ type: 'varchar' })
  correo: string;

  @Column({ type: 'varchar', length: 50 })
  contrasenia: string;

  @Column({ type: 'boolean', default: true })
  es_activo: boolean;

  @ManyToMany(() => Role, role => role.usuarios, { cascade: true })
  @JoinTable()
  roles: Role[];

  @OneToMany(() => Proyecto, proyecto => proyecto.responsable) // Relación OneToMany con Proyecto
  proyectos: Proyecto[]; // Propiedad que representa la relación con Proyecto

}