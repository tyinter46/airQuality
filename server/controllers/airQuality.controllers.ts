import { Request, Response } from "express";
import { Router } from "express";
import {getAirQuality, postAirQuaity} from "../services/airQuality.services";
import axios from 'axios'
import { postEveryMinute } from "../utils/scheduler";


const router: Router  = Router()

router.get('/:lat/:lon', (req: Request, res:Response)  =>{

const {lat, lon} = req.params 

return getAirQuality(lat,lon)

})

router.get('/paris', async (req:Request, res:Response) =>{
    //postParisAirQuaity()
 
      
    const  lat: string = '48.856613'
    const lon : string = '2.352222'
    // const parisAirQuality = 
    //res.status(200).send(postAirQuaity(lat, lon))


 })




export default router




