import * as jwt from 'jsonwebtoken'
import process from 'node:process'

const decodeToken = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) reject(err)
            else resolve(decoded)
        })
    })
}

const accessToken = (userName, idx, userId) => {
    const token = jwt.sign(
        {
            Idx: idx,
            userName: userName,
            userId: userId,
        },
        process.env.JWT_SECRET,
        {
            issuer: userName,
            expiresIn: '6h',
        }
    )
    return token
}
const refreshToken = (userName, idx, userId) => {
    const token = jwt.sign(
        {
            Idx: idx,
            userName: userName,
            userId: userId,
        },
        process.env.JWT_REFRESH,
        {
            issuer: userName,
            expiresIn: '365d',
        }
    )
    return token
}

export { accessToken, decodeToken, refreshToken }
