import UserController from './UserController'
import verifyToken from '../../middleware/verifyToken'
import upload from '../../middleware/multer'
import { Router } from 'express'

const userRouter = Router()

userRouter.get('/info', verifyToken, UserController.info)

userRouter.post('/profile', verifyToken, upload, UserController.profile)

// userRouter.get('/photos', verifyToken, UserController.photos)

// userRouter.post('/upload', verifyToken, upload, UserController.upload)

export default userRouter
