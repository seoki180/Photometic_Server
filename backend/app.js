import express from 'express'
import morgan from 'morgan'
import authRouter from './src/Auth/AuthRouter'
import userRouter from './src/User/UserRouter'
import photoRouter from './src/Photo/PhotoRouter'
import { config } from 'dotenv'
import { json, urlencoded } from 'body-parser'
import { internalSeverError, notFound } from './src/Error'

const app = express()

config('./.env')
app.set('view engine', 'ejs')
app.set('views', './public')

app.use(morgan('dev'))
app.use(json())
app.use(urlencoded({ extended: true }))

app.use('/auth', authRouter)
app.use('/user', userRouter)
app.use('/photo', photoRouter)
app.use(notFound) //404
app.use(internalSeverError) //500

export default app
