import express from "express"
import authRouter from "./src/Auth/AuthRouter"
import userRouter from "./src/User/UserRouter"
import { config } from "dotenv"

const morgan = require("morgan")
const body_parser =require("body-parser")
const app = express()


config("./.env")
app.set("view engine","ejs")
app.set("views","./public")

app.use(morgan('dev'))
app.use(body_parser.json())
app.use(body_parser.urlencoded({extended:true}))

app.use("/auth",authRouter)
app.use("/user",userRouter)


app.use((err,req,res,next)=>{
    console.log(err)
    res.status(404).send("404/not found")
})
    
app.use((err,req,res,next)=>{
    res.status(500).send("omg server on exception")
})

export default app