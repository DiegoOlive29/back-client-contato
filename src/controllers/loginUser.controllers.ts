import { Request,Response } from "express"
import { IloginRequest } from "../interfaces/login.interfaces"
import createLoginService from "../services/loginUser.services"

const createLoginController = async (req: Request, res: Response) =>{
    try{
    const loginData: IloginRequest = req.body
        const token = await createLoginService(loginData)
        return res.json({token})


    }catch (error) {
        if(error instanceof Error){

            return res.status(400).json({
                    message: error.message
                })
        }

    }

}
export {createLoginController}