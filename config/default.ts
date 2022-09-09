import * as dotenv from 'dotenv'
dotenv.config()
export default {
    port : 5000,
    dbUrl: `mongodb+srv://teewhy:${process.env.DB_PASSWORD}@cluster0.hruhrqe.mongodb.net/?retryWrites=true&w=majority`,
}

