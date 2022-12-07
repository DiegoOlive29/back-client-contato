import { Router } from "express";
import { createContactController, listContactController } from "../controllers/contact.contorllers";
import tokenAuthMiddleware from "../middlewares/ensureAuth.middleware";

const contactRoutes = Router();
    contactRoutes.post("", tokenAuthMiddleware,createContactController);
    contactRoutes.get("/user", tokenAuthMiddleware,listContactController);
export default contactRoutes;
