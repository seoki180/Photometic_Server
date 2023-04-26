import { S3Client } from '@aws-sdk/client-s3'
import process from 'node:process'
const REGION = 'ap-northeast-2' //e.g. "us-east-1"

const s3Client = new S3Client({
    region: REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
})
export default s3Client
