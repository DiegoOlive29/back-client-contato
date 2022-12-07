import { Request, Response } from 'express';
import { IuserRequest, IuserUpdateRequest } from '../interfaces/user.interfaces';
import createUserService from '../services/createUser.services';
import updateUserService from '../services/updateUser.services';
import { instanceToPlain } from 'class-transformer'
import deleteUserService from '../services/deleteuser.services';
const createUserController = async (req: Request, res: Response) => {
    
        const user: IuserRequest = req.body
        const createdUser = await createUserService(user)
        return res.json(instanceToPlain(createdUser))

  
}
const updateUserController = async (req: Request, res: Response) => {
    
        const user: IuserUpdateRequest = req.body
        const id: string = req.params.id
        const updatedUser = await updateUserService(user,id)
        return res.json(instanceToPlain(updatedUser))

    
}
const deleteUserControler= async (req: Request, res: Response) => {
    
        const id = req.params.id
        await deleteUserService(id)
        return res.status(204).send()

}

export { createUserController,updateUserController,deleteUserControler}