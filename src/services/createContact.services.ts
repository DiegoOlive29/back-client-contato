import { AppDataSource } from "../data-source"
import { User } from "../entities/user.entities"
import { Contact } from "../entities/contatc.entities"
import { IcontactRequest } from "../interfaces/contact.interfaces"
import { AppError } from "../errors/appError"


const createContact = async({name,email,phone}:IcontactRequest, id:string): Promise<Contact>=>{
    const userRepository = AppDataSource.getRepository(User)
    
    const contactRepository = AppDataSource.getRepository(Contact)

    const user = await userRepository.findOneBy({id})
    
    
    const contact =  contactRepository.create({
        name,email,phone,user:user!
    })
    await contactRepository.save(contact)

    return contact

}
export default createContact