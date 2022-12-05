import 'reflect-metadata'
import express from 'express'
import userRouters from './routers/users.routes'
const app = express()



app.use(express.json())

app.use('/users',userRouters)

app.listen(3000,()=>{
    console.log('server runnig in port 3000')

})