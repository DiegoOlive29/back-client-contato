import{Entity , Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity('users')
class User{
    @PrimaryGeneratedColumn('uuid')
    id : string

    @Column({length:160})
    name : string
    
    @Column({length:160, unique: true})
    email : string
    
    @Column({length:20})
    phone: string

    
    @Column()
    password: string
    
    @Column()
    date:  string

}

export {User}