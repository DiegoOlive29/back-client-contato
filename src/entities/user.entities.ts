import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Exclude } from "class-transformer";
import { Contact } from "./contatc.entities";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 160 })
  name: string;

  @Column({ length: 160, unique: true })
  email: string;

  @Column({ length: 20 })
  phone: string;

  @Column({ default: true })
  isActive: boolean;

  @Column()
  @Exclude()
  password: string;

  @Column()
  date: string;

  @OneToMany(() => Contact, (contact) => contact.user)
  contact: Contact[];
}

export { User };
