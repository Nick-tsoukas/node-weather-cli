# node-weather-cli

A command line tool that logs the weather when you just don't feel like leaving the command line. If there are any weather alerts in your area it will logs those out as well.

This utility uses two api keys
 - Dark Sky API
    - link: https://darksky.net/dev
    - purpose: Gets the weather forecast
 - Map box API  
    - link: https://www.mapbox.com/
    - purpose: converts a city name to it's coordinates ... Dark sky api will require it

install instructions

clone the repository and then run the command
```javascript
npm install
```
Example of getting the weather in Chicago 
```javascript
weather Chicago
```

output

Chicago, Illinois, United States
Rain today, with high temperatures falling to 64°F tomorrow.

Special Weather Statement
=================
...Dense Fog along the Lake Michigan Shore this Evening... Fog over Lake Michigan will continue to move onto shoreline areas in Illinois this evening, resulting in periods of dense fog along the immediate shoreline. Fog will continue to spread inland, with briefly dense fog possible. The fog may gradually diminish from north to south by the early overnight hours. Be prepared for rapidly changing visibility near the shore through the remainder of this evening.
