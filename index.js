
const express= require('express')
require('dotenv').config()

const app =express()
const port=process.env.PORT
const testroute=require('./Route/testroute')
const ProgramRoute=require('./Route/ProgramRoute')
require('./Database/Connection')
app.use(express.json())

app.use(testroute)
app.use(ProgramRoute)

app.listen(port,()=>{
    console.log(`server started successfully at port ${port}`)
})
