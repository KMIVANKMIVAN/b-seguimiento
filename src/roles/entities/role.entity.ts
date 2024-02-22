import { Entity, Column, PrimaryGeneratedColumn,ManyToMany } from 'typeorm';
import { Usuario } from 'src/usuarios/entities/usuario.entity';

@Entity("roles")
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type:'varchar',length:50})
  nombre: string;

  @ManyToMany(()=>Usuario, (usuario)=>usuario.roles,{cascade:true})
  usuarios:Usuario[]

}