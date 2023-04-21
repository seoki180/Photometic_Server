import UserService from "./UserService"
import { errResponse } from "../../config/response"
import { baseResponse } from "../../config/baseResponse"

export default class UserController{
    static async info(req,res){
        if(req.decoded){
            const idx = req.decoded.Idx
            
            const userInfo = await UserService.infoService(idx)
            const code = userInfo["code"]

            return res.status(code).json(userInfo)
        }
        return res.status(500).json(errResponse(baseResponse.JWT_DECODED_ERROR)) 
    }

    static async upload(req,res){
        if(req.decoded && req.file){
                const idx = req.decoded.Idx
                const photo = req.file
    
                console.log(photo)
                
                const upload = await UserService.uploadService(idx,photo)
                const code = upload["code"]
    
                return res.status(code).json(upload)
            } 
        return res.status(500).json(errResponse(baseResponse.AWS_SERVER_ERROR))
    }
    
    static async profile(req,res){
        if(req.decoded && req.file){
            const idx = req.decoded.Idx
            const userProfile = req.file.location
            
            const upload = await UserService.profileService(idx,userProfile)
            const code = upload["code"]

            return res.status(code).json(upload)
        }
        return res.status(500).json(errResponse(baseResponse.AWS_SERVER_ERROR))
    }
    
    static async photos(req,res){
        if(req.decoded){
            const idx = req.decoded.Idx
            const photos = await UserService.photosService(idx)
            const code = photos["code"]

            return res.status(code).json(photos)
        }
        return res.status(500).json(errResponse(baseResponse.JWT_DECODED_ERROR))
    }
}

