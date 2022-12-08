import { Request,Response } from "express"
import { AppError } from "../errors/appError"
import { IcontactRequest } from "../interfaces/contact.interfaces"
import createContact from "../services/createContact.services"
import listContact from "../services/listContactUser.services"

const createContactController = async (req: Request, res: Response) =>{
  
    const dados: IcontactRequest = req.body
    const id  = req.user.id
    
    const createdContact = await createContact(dados,id)
    return res.status(201).json(createdContact)


}
const listContactController = async (req:Request,res:Response)=>{
    const id = req.user.id

    const list =await listContact(id)

    return res.json(list)
}

export {createContactController,listContactController}