
import express from 'express'

const app =express()


app.get('/users',(request, response)=>{
        return response.json([
            {nome:"fabio"}
        ])

})

app.listen(3001,()=> {
    console.log("Listen in port 3001")
})