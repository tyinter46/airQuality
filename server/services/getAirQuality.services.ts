import axios from "axios"
import * as dotenv from 'dotenv'


const getAirQuality = async  (lat: string, lon: string)=>{

    
    try {
        dotenv.config()
        const apiKey = process.env.API_KEY
        const airQualityApi= `http://api.airvisual.com/v2/nearest_city/?lat=${lat}&lon=${lon}&key=${apiKey}`
        const getAirResult= await axios.get(airQualityApi) 
        const {data} =  getAirResult 
        const result = JSON.stringify( data.data.current.pollution)
      // console.log(result)
        return result
        
    } catch (error) {
        
      console.log(error)
      return  process.exit(1)
    }
 
}

export default getAirQuality