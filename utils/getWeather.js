const request = require('request');
const rp = require('request-promise');
const chalk = require('chalk');
const DARK_KEY = process.env.DARK_KEY;


const getWeather = (geoData) => {
  if (geoData) {
    const url = `https://api.darksky.net/forecast/${DARK_KEY}/${geoData.location}`;
    rp({url,json: true})
      .then((res) => {
        logMessage(geoData, res);
      })
      .catch((err) => {
        if(err) return console.log('Could not connect to the weather serveice ... please try again')
      });
  };
}

const logMessage = ({placeName:location}, response) => {
  console.log(chalk.green.bold(`${location}\n${response.daily.summary}\n`));
  if(response.alerts){
    const { title , description } = response.alerts[0];
    console.log(chalk.red.bold(`${title}\n=================\n${description}`))
  }
}



module.exports = getWeather;
