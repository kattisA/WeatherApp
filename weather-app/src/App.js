import './App.css';
import React, {useEffect, useState} from "react";
import Weather from './components/weather';
import {getWeatherSituations} from "./components/weatherSituations";
import background from "./img/ian-dooley-balloons-unsplash.jpg";

import {
    WiNightClear,
    WiCloud,
    WiSleet,
    WiThunderstorm,
    WiShowers,
    WiRain,
    WiFog,
    WiCloudy,
    WiDayCloudyHigh, WiSnowWind, WiSnow
} from "weather-icons-react";

/**
 * Written by Katarina Lejonlid
 * API documentation for SMHI http://opendata.smhi.se/apidocs/metfcst/index.html
 * Photo by <a href="https://unsplash.com/@sadswim?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">ian dooley</a> on 
 * <a href="https://unsplash.com/s/photos/sky-background-landscape?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
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

const weatherSituations = getWeatherSituations()



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
        //console.log("Latitude is:", lat)
        //console.log("Longitude is:", long)
        //console.log("vad är " + JSON.stringify(data))
    }, [lat,long, data])

    function getWeatherIcon(weatherSituationVal) {

        switch (weatherSituationVal) {
            case 1:
            case 2:
            case 3:
                return <WiDayCloudyHigh style={{fill: '#F0F8FF'}} size={150}/>
            case 4:
                return <WiNightClear style={{fill: '#696969'}} size={150}/>
            case 5:
                return <WiCloud style={{fill: '#F0F8FF'}} size={150}/>
            case 6:
                return <WiCloudy style={{fill: '#F0F8FF'}} size={150}/>
            case 7:
                return <WiFog style={{fill: '#696969'}} size={150}/>
            case 8:
            case 9:
                return <WiShowers style={{fill: '#4682B4'}} size={150}/>
            case 10:
                return <WiRain style={{fill: '#4682B4'}} size={150}/>
            case 11:
                return <WiThunderstorm style={{fill: '#696969'}} size={150}/>
            case 12:
            case 13:
            case 14:
                return <WiSleet style={{fill: '#F0F8FF'}} size={150}/>
            case 15:
            case 16:
            case 17:
                return <WiSnowWind style={{fill: '#F0F8FF'}} size={150}/>
            case 18:
                return <WiShowers style={{fill: '#F0F8FF'}} size={150}/>
            case 19:
            case 20:
                return <WiRain style={{fill: '#4682B4'}} size={150}/>
            case 21:
                return <WiThunderstorm style={{fill: '#696969'}} size={150}/>
            case 22:
            case 23:
            case 24:
                return <WiSleet style={{fill: '#F0F8FF'}} size={150}/>
            case 25:
            case 26:
            case 27:
                return <WiSnow style={{fill: '#F0F8FF'}} size={150}/>
        }
    }

    function mapWeatherData(data) {
        let precipitationLevel = data.timeSeries[0].parameters.find((p) => p.name==='pcat').values[0]
        const precipitation = precipitationCats.find(pre => pre.level === precipitationLevel)
        let weatherSituationVal = data.timeSeries[0].parameters.find((p) => p.name ==='Wsymb2').values[0]
        const weatherSituation = weatherSituations.find(wea => wea.value ===weatherSituationVal)
        return {
            temperature: Math.round(data.timeSeries[0].parameters.find((p) => p.name==='t').values[0]),
            humidity: data.timeSeries[0].parameters.find((p) => p.name==='r').values[0],
            precipitation: precipitation.description,
            weatherSituation:weatherSituation.meaning,
            weatherIcon: getWeatherIcon(weatherSituation.value)
        };
    }

  return (
      <div className="App" style={{ backgroundImage: `url(${background})`}}>
          <h1>Today's Weather</h1>
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

