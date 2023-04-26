// const dotenv = require("dotenv")
import * as token from '../config/token'
import baseResponse from '../config/baseResponse'
import { errResponse } from '../config/response'

const verifyToken = async (req, res, next) => {
    try {
        const decoded = await token.decodeToken(req.headers.authorization)
        req.decoded = decoded
        return next()
    } catch (err) {
        if (err.name === 'TokenExpiredError') {
            return res.status(401).json(errResponse(baseResponse.USER_JWT_EXPIRED))
        } else {
            return res.status(401).json(errResponse(baseResponse.USER_JWT_INVAILD))
        }
    }
}
export default verifyToken
