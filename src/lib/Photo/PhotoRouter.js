import PhotoController from './PhotoController'
import verifyToken from '../../middleware/verifyToken'
import upload from '../../middleware/multer'
import { Router } from 'express'

const photoRouter = Router()

photoRouter.get('/', verifyToken, PhotoController.info)

photoRouter.post('/upload', verifyToken, upload, PhotoController.upload)

photoRouter.delete('/:id', verifyToken, PhotoController.delete)

export default photoRouter
