import { Request, Response } from "express";
import { Router } from "express";
import getAirQuality from "../services/getAirQuality.services";

const router: Router  = Router()

router.get('/:lat/:lon', (req: Request, res:Response)  =>{

const {lat, lon} = req.params 
return getAirQuality(lat,lon)


})


export default router




