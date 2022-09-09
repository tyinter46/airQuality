import { Request, Response } from "express";
import { Router } from "express";
import {getAirQuality, postAirQuaity} from "../services/airQuality.services";
import { getDateAndTime } from "../services/airQuality.services";



const router = Router()

router.get('/:lat/:lon', (req: Request, res:Response)  =>{

const {lat, lon} = req.params 

return getAirQuality(lat,lon)

})

// router.get('/paris', async (req:Request, res:Response) =>{
//     //postParisAirQuaity()
//     const  lat: string = '48.856613'
//     const lon : string = '2.352222'
   
//     //res.status(200).send(postAirQuaity(lat, lon))
//  })

 router.get('/getDateAndTime', async (req:Request, res: Response)=>{
    const date = await getDateAndTime()
      return  res.send(date)
 })

export default router




