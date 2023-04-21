import s3 from "../config/aws"

const multer = require("multer")
const multerS3 = require("multer-s3")

const aws_upload = multer({
  storage : multerS3({
    s3 : s3,
    bucket : "photometic",
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key(req,file,callback){
      file.originalname = Buffer.from(file.originalname, 'latin1').toString('utf8')
      callback(null,`${file.originalname}`)
    },
  })
}).single("img")


const upload = async(req,res,next) =>{
    try{
      await aws_upload(req,res,(err)=>{
        if(err){
          console.log(err)
          throw err
        }
        else{
          return next()
        }
      })
    }
    catch(err){
      console.log(err)
    }
  }
export default upload
