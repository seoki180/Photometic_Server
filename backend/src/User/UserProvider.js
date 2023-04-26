import db from '../../config/database'

export default class UserProvider {
    static async selectUserInfoQuery(idx) {
        const sql = `select Idx,userName,userId,signedDate,userProfile from Users where idx = ?`

        return new Promise((resolve, reject) => {
            db.query(sql, [idx], (err, data) => {
                if (err) reject(err)
                else resolve(data)
            })
        })
    }

    static async updateUserProfleQuery(idx, userProfile) {
        const sql = `update Users set userProfile = ? where idx = ?`

        return new Promise((resolve, reject) => {
            db.query(sql, [userProfile, idx], (err, data) => {
                if (err) reject(err)
                else resolve(data)
            })
        })
    }
    // static async insertUserPhotoQuery(idx, photoUrl, photoSize, photoName) {
    //     const sql = `insert into Photos(user_id,photoUrl,photoName,photoSize) value(?,?,?,?)`

    //     return new Promise((resolve, reject) => {
    //         db.query(sql, [idx, photoUrl, photoName, photoSize], (err, data) => {
    //             if (err) reject(err)
    //             else resolve(data)
    //         })
    //     })
    // }

    // static async selectUserPhotosQuery(idx) {
    //     const sql = `select * from Photos where user_id = ?`

    //     return new Promise((resolve, reject) => {
    //         db.query(sql, [idx], (err, data) => {
    //             if (err) reject(err)
    //             else resolve(data)
    //         })
    //     })
    // }
}
