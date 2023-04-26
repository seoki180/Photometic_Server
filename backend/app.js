import express from 'express'
import authRouter from './src/Auth/AuthRouter'
import userRouter from './src/User/UserRouter'
import photoRouter from './src/Photo/PhotoRouter'
import { config } from 'dotenv'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'

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

app.use((err, req, res) => {
    console.log(err)
    res.status(404).send('404/not found')
})

app.use((err, req, res) => {
    res.status(500).send('omg server on exception')
})

export default app
