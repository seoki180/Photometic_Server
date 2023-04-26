import { createPool } from 'mysql2'
import process from 'node:process'
import { config } from 'dotenv'

config('../.env')

const database = createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
})

export default database
