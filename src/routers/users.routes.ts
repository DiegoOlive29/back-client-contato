import { Router } from 'express';
import { createUserController } from '../controllers/user.controllers';

const userRouters = Router()
userRouters.post('',createUserController)

export default userRouters

