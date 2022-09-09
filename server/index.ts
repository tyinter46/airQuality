import express from 'express'
import config from 'config'
import { connectToDb } from './utils/connectToDb'
import airQuality from './controllers/airQuality.controllers'
import { postEveryMinute } from './utils/scheduler'
import { getDateAndTime } from './services/airQuality.services'

const app = express()
app.use(express.json())



app.use('/api',  airQuality)

const port = config.get('port')
app.listen (port, ()=>{
  // console.log(`port is runninbg at ${port}`)
 postEveryMinute()

connectToDb()
})