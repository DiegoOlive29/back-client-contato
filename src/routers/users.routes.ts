import { Router } from 'express';
import { createUserController, updateUserController } from '../controllers/user.controllers';
import tokenAuthMiddleware from '../middlewares/ensureAuth.middleware';

const userRouters = Router()
userRouters.post('',createUserController)
userRouters.patch('/:id',tokenAuthMiddleware,updateUserController)

export default userRouters

