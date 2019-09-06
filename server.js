const express = require('express');
const path = require('path')
const fetch = require('node-fetch')
const dotenv = require('dotenv')
const cors = require('cors')

const app = express();
const port = process.env.PORT || 5000;

app.use(cors())

dotenv.config()
const fetchTest = async (city) => {
    let locationFetch = await fetch(`http://open.mapquestapi.com/geocoding/v1/address?key=${process.env.MAPQUEST_KEY}&city=${city}`)
    let locationData = await locationFetch.json()
    let latitude = locationData.results[0].locations[0].latLng.lat
    let longitude = locationData.results[0].locations[0].latLng.lng
    let weatherFetch = await fetch(`https://api.darksky.net/forecast/${process.env.DARKSKY_KEY}/${latitude},${longitude}`)
    let weatherData = await weatherFetch.json()
    return weatherData
}

app.use(express.static(path.join(__dirname, 'client/build')))
// // create a GET route
// app.get('/express_backend', (req, res) => {
//   res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
// });

//API return
app.get('/weatherAPI/:city', async (req, res) => {
  const locationData = await fetchTest(req.params.city)
  res.send(locationData)
})

//Catchall handler
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});


app.listen(port, () => console.log(`Listening on port ${port}`));