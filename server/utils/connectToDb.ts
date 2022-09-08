import mongoose from "mongoose";
import  config  from "config"


export const connectToDb = async ()=>{
    const dbUrl = config.get<string>('dbUrl')
    try {
        await mongoose.connect(dbUrl)
        return console.log('db connected successfully')
    } catch (error) {
        console.log(error)
    }

}