import * as baseResponse from '../../config/baseResponse'
import { errResponse, response } from '../../config/response'
import UserProvider from './UserProvider'

export default class UserService {
    static async infoService(idx) {
        try {
            const userInfo = await UserProvider.selectUserInfoQuery(idx)
            if (userInfo.length == 0) {
                return errResponse(baseResponse.USER_MAIN_ERROR)
            }
            return response(baseResponse.USER_MAIN_SUCCESS, userInfo)
        } catch (err) {
            console.log(err)
            return errResponse(baseResponse.DB_ERROR)
        }
    }

    // static async uploadService(idx, photo) {
    //     try {
    //         const photoUrl = photo.path || photo.location
    //         const photoSize = photo.size
    //         const photoName = photo.originalname

    //         const upload = await UserProvider.insertUserPhotoQuery(
    //             idx,
    //             photoUrl,
    //             photoSize,
    //             photoName
    //         )
    //         if (upload.length == 0) {
    //             return errResponse(baseResponse.USER_UPLOAD_ERROR)
    //         }
    //         return response(baseResponse.USER_UPLOAD_SUCCESS)
    //     } catch (err) {
    //         console.log(err)
    //         return errResponse(baseResponse.DB_ERROR)
    //     }
    // }

    // static async photosService(idx) {
    //     try {
    //         const photos = await UserProvider.selectUserPhotosQuery(idx)
    //         return response(baseResponse.USER_PHOTOS_SUCCESS, photos)
    //     } catch (err) {
    //         console.log(err)
    //         return errResponse(baseResponse.DB_ERROR)
    //     }
    // }

    static async profileService(idx, userProfile) {
        try {
            const profile = await UserProvider.updateUserProfleQuery(idx, userProfile)
            if (profile.length == 0) {
                return errResponse(baseResponse.USER_PROFILE_ERROR)
            }
            return response(baseResponse.USER_PROFILE_SUCCESS)
        } catch (err) {
            console.log(`${err},here`)
            return errResponse(baseResponse.DB_ERROR)
        }
    }
}
