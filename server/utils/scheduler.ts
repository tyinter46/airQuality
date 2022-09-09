import nodeCron from 'node-cron'
import { postAirQuaity } from '../services/airQuality.services'

export const postEveryMinute = ()=>{


nodeCron.schedule('* * * * *', ()=>{
   // console.log('i am running every minute')
   postAirQuaity()
   console.log('posted after one minute')
})
}

//postEveryMinute()

