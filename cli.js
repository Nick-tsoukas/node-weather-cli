#!/usr/bin/env node

const keys = require('dotenv').config();
const getGeoData = require('./utils/getGeoData');
const getWeather = require('./utils/getWeather');
const DARK_KEY = process.env.DARK_KEY;

let address = process.argv.slice(2).join(' ');


const fetchGeoData = getGeoData(address);


fetchGeoData.then((data) => {
  getWeather(data);
});
