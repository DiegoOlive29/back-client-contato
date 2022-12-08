import "reflect-metadata";
import express from "express";
import "express-async-errors";
import errorMiddlewares from "./middlewares/errors.middlewares";
import userRouters from "./routers/users.routes";
import sessionRoutes from "./routers/login.routes";
import contactRoutes from "./routers/contact.routes";
import cors from 'cors'

const app = express();

app.use(cors())

app.use(express.json());

app.use("/users", userRouters);
app.use("/login", sessionRoutes);
app.use("/contact", contactRoutes);


app.use(errorMiddlewares);

app.listen(3001, () => {
  console.log("server runnig in port 3000");
});
