import { Request, Response } from 'express';
import { createEmptyStatement } from 'typescript';
import { IuserRequest } from '../interfaces/user.interfaces';
import createUserService from '../services/createUser.services';

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
export { createUserController}