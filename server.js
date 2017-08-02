const express = require('express')
const https = require('https')
const cors = require('cors')
const app = express()

const DARKSKYAPIKEY = process.env.DARKSKYAPIKEY

const whitelist = ['https://adeluccar.github.io', 'http://localhost:8080'];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.get('/', cors(corsOptions), function(req, res){
  const lat = req.query.lat
  const lon = req.query.lon
  res.setHeader('Content-Type', 'application/json')

  https.request('https://api.darksky.net/forecast/'
    + DARKSKYAPIKEY + '/'
    + lat + ',' + lon
    + '?exclude=minutely,hourly,daily,flags', function(response){
    response.pipe(res)
  }).on('error', function(e) {
    res.sendStatus(500)
  }).end();
})

app.listen(process.env.PORT || 3000, function(){
  console.log('Example app listening on port 3000!')
})
