import s3Client from '../config/aws/s3Client'
import multer from 'multer'
import multerS3 from 'multer-s3'
import { Buffer } from 'node:buffer'

const aws_upload = multer({
    storage: multerS3({
        s3: s3Client,
        bucket: 'photometic',
        acl: 'public-read',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        key(req, file, callback) {
            const date = new Date().toLocaleString()
            file.originalname = Buffer.from(file.originalname, 'latin1').toString('utf8') + ' ' + date
            callback(null, `${file.originalname}`)
        },
    }),
}).single('img')

const upload = async (req, res, next) => {
    try {
        await aws_upload(req, res, (err) => {
            if (err) {
                console.log(err)
                throw err
            } else {
                return next()
            }
        })
    } catch (err) {
        console.log(err)
    }
}
export default upload
