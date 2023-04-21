import * as jwt from "jsonwebtoken"

const decodeToken = (token) =>{
        return new Promise((resolve,reject) => {
            jwt.verify(token,process.env.JWT_SECRET,(err,decoded)=>{
                if(err) throw err
                else resolve(decoded)
            })
        })
}

const accessToken = (userName,idx,userId)=>{
    try{
        const token = jwt.sign({
            Idx : idx,
            userName : userName,
            userId : userId
        },
        process.env.JWT_SECRET,
        {
            issuer : userName,
            expiresIn : '6h',
        })
        return token

    }
    catch(err){
        throw err
    }
}
const refreshToken = (userName,idx,userId)=>{
    try{
        const token = jwt.sign({
            Idx : idx,
            userName : userName,
            userId : userId
        },
        process.env.JWT_REFRESH,
        {
            issuer : userName,
            expiresIn : '365d',
        })
        return token
    }
    catch(err){
        throw(err)
    }
}

export {accessToken, decodeToken, refreshToken}