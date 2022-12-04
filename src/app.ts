import 'reflect-metadata'
import express from 'express'
import userRouter from './routes/users.routes'

const app =express()


app.use(express.json())



app.listen(3001,()=> {
    console.log("Listen in port 3001")
})
app.use('/users',userRouter)

