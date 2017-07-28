const express = require('express')
const https = require('https')
const app = express()

const DARKSKYAPIKEY = process.env.DARKSKYAPIKEY

app.get('/', function(req, res){
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

app.listen(3000, function(){
  console.log('Example app listening on port 3000!')
})
