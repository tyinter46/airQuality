import axios from "axios"
import * as dotenv from 'dotenv'
import config from 'config'
import ResultModel from "../models/result.model"
import { response } from "express"

const dbUri = config.get<string>('dbUrl')
export const getAirQuality = async  (lat: string, lon: string)=>{

    
    try {
        dotenv.config()
        const apiKey = process.env.API_KEY
        const airQualityApi= `http://api.airvisual.com/v2/nearest_city/?lat=${lat}&lon=${lon}&key=${apiKey}`
        const getAirResult= await axios.get(airQualityApi) 
        const {data} =  getAirResult 
        const result = JSON.stringify( data.data.current.pollution)
      console.log(result)
        return result
        
    } catch (error) {
        
      console.log(error)
      return  process.exit(1)
    }
 
}

export const postAirQuaity = async (lat='48.856613', lon='2.352222')=>{

    try {
      
         const parisData = await getAirQuality(lat, lon)
         const data = JSON.parse(parisData)
          await  ResultModel.create(data)
       
    } catch (error) {
        console.error(error)
    }
}

