'use strict'
import { S3Client, DeleteObjectCommand } from '@aws-sdk/client-s3'
import process from 'node:process'
import { config } from 'dotenv'

config('../.env')

// const s3Client = new S3Client({
//     region: process.env.AWS_REGION,
//     credentials: {
//         accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//         secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//     },
// })

// Create service client module using ES6 syntax.

// Set the AWS Region.
const REGION = 'ap-northeast-2'
// Create an Amazon S3 service client object.
const s3Client = new S3Client({
    region: REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
})

export const bucketParams = { Bucket: 'photometic', Key: '스크린샷 2023-04-10 오후 1.47.06.png' }

export const run = async () => {
    try {
        const data = await s3Client.send(new DeleteObjectCommand(bucketParams))
        console.log('Success. Object deleted.', data)
        return data // For unit tests.
    } catch (err) {
        console.log('Error', err)
    }
}
run()

export default s3Client
