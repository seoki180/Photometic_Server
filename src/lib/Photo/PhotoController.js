import PhotoService from './PhotoService'
import { errResponse } from '../../config/response'
import * as baseResponse from '../../config/baseResponse'

export default class PhotoController {
    static async info(req, res) {
        if (req.decoded) {
            const idx = req.decoded.Idx
            const photos = await PhotoService.infoService(idx)
            const code = photos['code']

            return res.status(code).json(photos)
        }
        return res.status(500).json(errResponse(baseResponse.JWT_DECODED_ERROR))
    }

    static async upload(req, res) {
        if (req.decoded && req.file) {
            const idx = req.decoded.Idx
            const photo = req.file
            const photoDate = req.body.photoDate
            const uploadDate = req.body.uploadDate

            const upload = await PhotoService.uploadService(idx, photo, uploadDate, photoDate)
            const code = upload['code']

            return res.status(code).json(upload)
        }
        return res.status(500).json(errResponse(baseResponse.AWS_SERVER_ERROR))
    }

    static async delete(req, res) {
        if (req.decoded && req.params) {
            const idx = req.params.id //Photo index
            const id = req.decoded.Idx // user id

            const deleted = await PhotoService.deletePhoto(idx, id)
            const code = deleted['code']

            return res.status(code).json(deleted)
        }
        return res.status(500).json(errResponse(baseResponse.JWT_DECODED_ERROR))
    }
}
