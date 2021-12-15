import './App.css';
import React, {useEffect, useState} from "react";
import Weather from './components/weather';

/**
 * Written by Katarina Lejonlid
 * API documentation for SMHI http://opendata.smhi.se/apidocs/metfcst/index.html
 */

const precipitationCats = [
    {level: 0, description: "No precipitation"},
    {level: 1, description: "Snow"},
    {level: 2, description: "Snow and rain"},
    {level: 3, description: "Rain"},
    {level: 4, description: "Drizzle"},
    {level: 5, description: "Freezing rain"},
    {level: 6, description: "Freezing drizzle"},
]


export default function App() {

    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            navigator.geolocation.getCurrentPosition(function(position) {
                setLat(position.latitude);
                setLong(position.longitude);
            });

            await fetch(`https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/17.64/lat/59.86/data.json`)
                .then(res => res.json())
                .then(result => {
                    setData(result)
                    if (Object.entries(result).length) {
                        const mappedData = mapWeatherData(result)
                        return mappedData

                    }
                });
        }
        fetchData();
        // console.log("Latitude is:", lat)
        // console.log("Longitude is:", long)
        // console.log("vad är " + JSON.stringify(data))
    }, [lat,long, data])


    function mapWeatherData(data) {
        let precipitationLevel = data.timeSeries[0].parameters[1].values[0]
        const precipitation = precipitationCats.find(pre => pre.level === precipitationLevel)
        // TODO Matcha på pcat = precipitation, t = temperature, r = relative humidity eftersom parameters arrayen ändras
        return {
            temperature: data.timeSeries[0].parameters[11].values[0],
            humidity: data.timeSeries[0].parameters[15].values[0],
            precipitation: precipitation.description
        };
    }

  return (
      <div className="App">
          <h1>Weather App</h1>
              {(typeof data.approvedTime != 'undefined') ? (
                  <Weather weatherData={mapWeatherData(data)}/>
              ) : (
                  <div></div>
              )}
          <footer>
              Page created by Katarina Lejonlid
          </footer>
      </div>
  );
}

