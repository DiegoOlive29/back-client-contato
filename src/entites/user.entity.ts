import{Entity , Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity('users')
class UserContato{
    @PrimaryGeneratedColumn('uuid')
    id : string

    @Column()
    name : string
    
    @Column({length:160, unique: true})
    email : string
    
    @Column()
    phone: number

    
    @Column()
    password: string
    
    @Column()
    date:  Date

}

export {UserContato}