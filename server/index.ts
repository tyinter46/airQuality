import express from 'express'
import config from 'config'
import { connectToDb } from './utils/connectToDb'
import getAirQuality from './services/getAirQuality.services'
import airQuality from './controllers/airQuality.controllers'

const app = express()
app.use(express.json())



app.use('/zone', airQuality)

const port = config.get('port')
app.listen (port, ()=>{
  // console.log(`port is runninbg at ${port}`)

connectToDb()
})