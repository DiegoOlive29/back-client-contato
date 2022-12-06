import{Entity , Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity('contact')
class Contact{
    @PrimaryGeneratedColumn('uuid')
    id : string

    @Column({length:160})
    name : string
    
    @Column({length:160, unique: true})
    email : string
    
    @Column({length:20})
    phone: string

     
    @Column({default:true})
    isActive: boolean


}

export {Contact}