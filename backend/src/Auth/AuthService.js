import AuthProvider from "./AuthProvider"
import * as token from "../../config/token"
import * as hashing from "../../config/cryptopy"
import baseResponse from "../../config/baseResponse"
import {response,errResponse} from "../../config/response"

export default class AuthService{
    static async loginService(id,password){
        try{
            const loginUser = await AuthProvider.selectUserInfoQuery(id)
            if(loginUser.length != 0){
                const hashingData = [
                    password,
                    loginUser[0].userSalt,
                    loginUser[0].userPassword,
                ]
                const verified = await hashing.verifyPassword(hashingData)
                if(verified){
                    const userName = loginUser[0].userName
                    const idx = loginUser[0].idx
                    const accessToken = token.accessToken(userName,idx,id)
                    const refreshToken = token.refreshToken(userName,idx,id)
                    
                    const jwt = {
                        access : accessToken,
                        refresh : refreshToken
                    }

                    return response(baseResponse.AUTH_LOGIN_SUCCESS,{jwt:jwt})
                }
                return errResponse(baseResponse.AUTH_LOGIN_WRONGPASSWORD)
            }
            return errResponse(baseResponse.AUHT_LOGIN_NOSUCHID)
        }
        catch(err){
            console.log(err)
            return errResponse(baseResponse.DB_ERROR)
        }
    }

    static async registerService(id,password,name){
        try{
            const registerUser = await AuthProvider.selectUserInfoQuery(id)
            const checkUserName = await AuthProvider.selectUserNameQuery(name)
            if(registerUser.length == 0){
                if(checkUserName.length == 0){
                    const {hashedPassword,userSalt} = await hashing.createHashedPassword(password)
                    const result = await AuthProvider.insertUserInfoQuery(id,hashedPassword,userSalt,name)
                    if(result.length != 0){
                        return response(baseResponse.AUTH_REGISTER_SUCCESS)
                    }
                    return errResponse(baseResponse.AUTH_REGISTER_DBERROR)
                }
                return errResponse(baseResponse.AUTH_REGISTER_EXISTNAME)
            } 
            return errResponse(baseResponse.AUTH_REGISTER_EXISTID)
        }
        catch(err){
            console.log(err)
            return errResponse(baseResponse.DB_ERROR)
        }
    }


}

module.exports = AuthService