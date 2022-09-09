import * as dotenv from 'dotenv'
import config from 'config'
import ResultModel, { Result } from "../models/result.model"
import dayjs from "dayjs";
import axios from 'axios';



const dbUri = config.get<string>('dbUrl')


export const getAirQuality = async  (lat: string, lon: string)=>{
  
    try {
        dotenv.config()
        const apiKey = process.env.API_KEY
        const airQualityApi= `http://api.airvisual.com/v2/nearest_city/?lat=${lat}&lon=${lon}&key=${apiKey}`
        const getAirResult= await axios.get(airQualityApi) 
        const {data} =  getAirResult 
        let now = dayjs().format("dddd, MMMM D YYYY, h:mm:ss a")

    
      let result = data.data.current.pollution 
      const newResult = Object.assign(result, {postedAt: now})

            console.log(newResult)
          
        return newResult
        
    } catch (error) {
        
      console.log(error)
      //process.exit(1)
    }
 
}

export const postAirQuaity = async (lat='48.856613', lon='2.352222')=>{

    try {
      
         const parisData = await getAirQuality(lat, lon)
         await  ResultModel.create(parisData)
       
    } catch (error) {
        console.error(error)
    }
}

export const getDateAndTime = async () =>{

try {

  const allParisData = await ResultModel.find({})
  //console.log(allParisData)
  
  const mostPolluted : any = await ResultModel.findOne().sort({
    "aqius": -1
  }).limit(1)
 
  const dateAndTime = mostPolluted.postedAt 
  console.log(dateAndTime)
  
  return dateAndTime

} catch (error) {
  console.error (error)
}
     
}

