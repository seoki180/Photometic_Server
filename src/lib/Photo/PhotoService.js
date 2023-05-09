import PhotoProvider from './PhotoProvider'

import deleteObjcet from '../../config/aws/deleteObjcet'
import * as baseResponse from '../../config/baseResponse'
import { errResponse, response } from '../../config/response'

export default class PhotoService {
    static async infoService(idx) {
        try {
            const photos = await PhotoProvider.selectPhotosQuery(idx)
            return response(baseResponse.PHOTO_INFO_SUCCESS, photos)
        } catch (err) {
            console.log(err)
            return errResponse(baseResponse.DB_ERROR)
        }
    }

    static async uploadService(idx, photo, uploadDate, photoDate) {
        try {
            const photoUrl = photo.path || photo.location
            const photoSize = photo.size
            const photoName = photo.originalname

            const upload = await PhotoProvider.insertPhotoQuery(idx, photoUrl, photoSize, photoName, uploadDate, photoDate)
            if (upload.length != 0) {
                return response(baseResponse.PHOTO_UPLOAD_SUCCESS)
            }
            return errResponse(baseResponse.PHOTO_UPLOAD_ERROR)
        } catch (err) {
            console.log(err)
            return errResponse(baseResponse.DB_ERROR)
        }
    }

    static async deletePhoto(idx, id) {
        try {
            const deleted = await PhotoProvider.selectPhotoQuery(idx, id)
            const deletedRow = await PhotoProvider.deletePhotoQuery(idx)
            const key = deleted[0].photoName
            if (deleted.length != 0 && deletedRow.length != 0) {
                deleteObjcet(key)
                return response(baseResponse.PHOTO_DELETE_SUCCESS)
            }
        } catch (err) {
            console.log(err)
            return errResponse(baseResponse.DB_ERROR)
        }
    }
}
