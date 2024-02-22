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

}