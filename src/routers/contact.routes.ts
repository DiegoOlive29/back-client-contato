import { Router } from "express";
import { createContactController } from "../controllers/contact.contorllers";
import tokenAuthMiddleware from "../middlewares/ensureAuth.middleware";

const contactRoutes = Router();
    contactRoutes.post("", tokenAuthMiddleware,createContactController);

export default contactRoutes;
