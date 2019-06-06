const request = require('request');
const rp = require('request-promise');
const GEO_KEY = process.env.GEO_KEY;

const getGeoData = (address) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURI(address)}.json?access_token=${GEO_KEY}&limit=1`;
  return rp({url, json: true})
  .then((res) => {
    const data = {
      // @location : string lat and long
      // @placeName: string The name and state of the city
      location: res.features[0].center.reverse().join(','),
      placeName: res.features[0].place_name
    }
    return data
  })
  .catch((err) => {
    if(err) return console.log('there was an error .. please check the location provided')
  })
}
module.exports = getGeoData;
