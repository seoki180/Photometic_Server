import db from '../../config/database'

export default class PhotoProvider {
    static async insertPhotoQuery(idx, photoUrl, photoSize, photoName) {
        const sql = `insert into Photos(user_id,photoUrl,photoName,photoSize) value(?,?,?,?)`

        return new Promise((resolve, reject) => {
            db.query(sql, [idx, photoUrl, photoName, photoSize], (err, data) => {
                if (err) reject(err)
                else resolve(data)
            })
        })
    }

    static async selectPhotosQuery(idx) {
        const sql = `select * from Photos where user_id = ?`

        return new Promise((resolve, reject) => {
            db.query(sql, [idx], (err, data) => {
                if (err) reject(err)
                else resolve(data)
            })
        })
    }

    static async selectPhotoQuery(idx, id) {
        const sql = `select * from Photos where idx = ? and user_id = ?`

        return new Promise((resolve, reject) => {
            db.query(sql, [idx, id], (err, data) => {
                if (err) reject(err)
                else resolve(data)
            })
        })
    }

    static async deletePhotoQuery(idx) {
        const sql = `delete from Photos where idx = ?`

        return new Promise((resolve, reject) => {
            db.query(sql, [idx], (err, data) => {
                if (err) reject(err)
                else resolve(data)
            })
        })
    }
}
