const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
import dotenv from 'dotenv';
dotenv.config();

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

const fetchTest = async () => {
    let locationFetch = await fetch(`http://open.mapquestapi.com/geocoding/v1/address?key=${process.env.REACT_APP_MAPQUEST_KEY}&city=${this.state.inputText}`)
    let locationData = await locationFetch.json()
    let latitude = locationData.results[0].locations[0].latLng.lat
    let longitude = locationData.results[0].locations[0].latLng.lng
    console.log(latitude, longitude);
}

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});