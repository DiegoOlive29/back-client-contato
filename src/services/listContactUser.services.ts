import { AppDataSource } from "../data-source"
import { User } from "../entities/user.entities"
import { Contact } from "../entities/contatc.entities"
import { IcontactRequest } from "../interfaces/contact.interfaces"
import { AppError } from "../errors/appError"


const listContact = async(id:string): Promise<Contact[]>=>{
    const userRepository = AppDataSource.getRepository(User)
    const contactRepository = AppDataSource.getRepository(Contact)

    const user = await userRepository.findOneBy({id})
    const contacts = await contactRepository.findBy({user:user!})


    return contacts

}
export default listContact