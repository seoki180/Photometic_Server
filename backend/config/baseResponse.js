module.exports = {
    DB_ERROR :{
        "isSuccess" : false,
        "message" : "database error",
        "code" : 500
    },
    
    AWS_SERVER_ERROR : {
        "isSuccess" : false,
        "message" : "error on aws server",
        "code" : 500
    },
    JWT_DECODED_ERROR : {
        "isSuccess" : false,
        "message" : "error on middleware jwt",
        "code" : 500
    },

    AUTH_LOGIN_SUCCESS:{
        "isSuccess" : true,
        "message" : "login success",
        "code" : 200
    },

    AUHT_LOGIN_NOSUCHID : {
        "isSuccess" : false,
        "message" : "no such id",
        "code" : 400
    },

    AUTH_LOGIN_WRONGPASSWORD : {
        "isSuccess" : false,
        "message" : "wrong password",
        "code" : 400
    },
    
    AUTH_REGISTER_EXISTID : {
        "isSuccess" : false,
        "message" : "already exist id",
        "code" : 400
    },
    
    AUTH_REGISTER_EXISTNAME : {
        "isSuccess" : false,
        "message" : "alreay exist name",
        "code" : 400
    },
    
    AUTH_REGISTER_SUCCESS : {
        "isSuccess" : true,
        "message" : "register success",
        "code" : 200
    },
    AUTH_REGISTER_DBERROR : {
        "isSuccess" : false,
        "message" : "DB INSERT ERROR",
        "code" : 500
    },
    USER_JWT_EXPIRED : {
        "isSuccess" : false,
        "message" : "token is expired",
        "code" : 401
    },
    USER_JWT_INVAILD : {
        "isSuccess" : false,
        "message" : "token is invaild",
        "code" : 401
    },
    USER_JWT_NOTDECODED:{
        "isSuccess" : false,
        "message" : "token didn't decoded",
        "code" : 401
    },

    USER_MAIN_ERROR : {
        "isSuccess" : false,
        "message" : "no such user in DB",
        "code" : 401
    },
    USER_MAIN_SUCCESS : {
        "isSuccess" : true,
        "message" : "success to get user info",
        "code" : 200
    },
    USER_UPLOAD_SUCCESS : {
        "isSuccess" : true,
        "message" : "success to upload photo",
        "code" : 200
    },
    USER_UPLOAD_ERROR : {
        "isSuccess" : false,
        "message" : "error on upload photo",
        "code" : 401
    },

    USER_PHOTOS_SUCCESS : {
        "isSuccess" : true,
        "message" : "success to check user photos",
        "code" : 200
    },
        
    USER_PROFILE_SUCCESS : {
        "isSuccess" : true,
        "message" : "success to update user profile",
        "code" : 200
    },
        
    USER_PROFILE_ERROR : {
        "isSuccess" : true,
        "message" : "error on update user profile",
        "code" : 400
    },
}