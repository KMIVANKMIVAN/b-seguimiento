import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { Role } from '../../roles/entities/role.entity';
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

  @Column({ type: 'varchar' })
  correo: string;

  @Column({ type: 'varchar', length: 50 })
  contraseña: string;

  @Column({ type: 'boolean', default: true })
  es_activo: boolean;

  @ManyToMany(() => Role, role => role.usuarios, { cascade: true })
  @JoinTable()
  roles: Role[];

}