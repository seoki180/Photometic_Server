import { DeleteObjectCommand } from '@aws-sdk/client-s3'
import s3Client from './s3Client' // Helper function that creates an Amazon S3 service client module.

const deleteObjcet = async (key) => {
    try {
        const bucketParams = {
            Bucket: 'photometic',
            Key: key,
        }
        const data = await s3Client.send(new DeleteObjectCommand(bucketParams))
        return data // For unit tests.
    } catch (err) {
        console.log('Error', err)
    }
}

export default deleteObjcet
