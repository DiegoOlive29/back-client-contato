import { Request, Response } from 'express';
import { IuserRequest, IuserUpdateRequest } from '../interfaces/user.interfaces';
import createUserService from '../services/createUser.services';
import updateUserService from '../services/updateUser.services';

const createUserController = async (req: Request, res: Response) => {
    try{
        const user: IuserRequest = req.body
        const createdUser = await createUserService(user)
        return res.json(createdUser)

    }catch (error) {
        if(error instanceof Error){

            return res.status(400).json({
                    message: error.message
                })
        }

    }
}
const updateUserController = async (req: Request, res: Response) => {
    try{
        const user: IuserUpdateRequest = req.body
        const id: string = req.params.id
        const updatedUser = await updateUserService(user,id)
        return res.json(updatedUser)

    }catch (error) {
        if(error instanceof Error){

            return res.status(400).json({
                    message: error.message
                })
        }

    }
}

export { createUserController,updateUserController}