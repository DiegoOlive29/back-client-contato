import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { User } from "./user.entities";

@Entity("contact")
class Contact {
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

  @ManyToOne(()=> User)
  user:User

}

export { Contact };
