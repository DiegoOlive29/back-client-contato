import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entities";
import { IuserRequest,IuserUpdateRequest } from "../interfaces/user.interfaces";
import {hash} from 'bcrypt'
const updateUserService = async ({date,name,email,phone,password}:IuserUpdateRequest, id:string):Promise<User>=>{

    const userRepository = AppDataSource.getRepository(User)
    const findUser = await userRepository.findOneBy({
        id
    })

    if(!findUser){
        throw new Error('User not found')
        
    }

    await userRepository.update(
        id,
        {
            name:    name      ? name: findUser.name,
            email:   email     ? email: findUser.email,
            password:password  ? await hash(password,10): findUser.password,
            date:    date      ? date: findUser.date,
            phone:   phone     ? phone: findUser.phone
        }
    )
    const user = await userRepository.findOneBy({
        id
    })

    return user!
}
export default updateUserService