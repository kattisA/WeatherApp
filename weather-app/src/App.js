import './App.css';
import React, {useEffect, useState} from "react";
import Weather from './components/weather';
import {getWeatherSituations} from "./components/weatherSituations";
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import WbCloudyIcon from '@material-ui/icons/WbCloudy';
import NightsStayOutlinedIcon from '@material-ui/icons/NightsStayOutlined';
import WavesOutlinedIcon from '@material-ui/icons/WavesOutlined';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import {styled} from "@material-ui/core";
import {purple, yellow} from "@material-ui/core/colors";

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

const weatherSituations = getWeatherSituations()

//TODO Add functionality for array with weather situation name = Wsymb2 http://opendata.smhi.se/apidocs/metfcst/parameters.html#parameter-wsymb


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
        //console.log("vad är " + JSON.stringify(data))
    }, [lat,long, data])

    function getWeatherIcon(weatherSituationVal) {

        switch (weatherSituationVal){
            case 1:
            case 2:
            case 3:
                return <WbCloudyIcon style={{ fill: '#F0F8FF' }} fontSize="large"/>
            case 4:
                return <NightsStayOutlinedIcon style={{ fill: '#696969'}} fontSize="large"/>
            case 5:
            case 6:
                return <WbCloudyIcon style={{ fill: '#F0F8FF' }} fontSize="large"/>
            case  7:
                return <WavesOutlinedIcon style={{ fill: '#696969' }} fontSize="large"/>
            case  8:
            case  9:
            case  10:
                return <BeachAccessIcon style={{ fill: '#7B68EE' }} fontSize="large"/>
            case  11:
                return <FlashOnIcon style={{ fill: '#696969' }} fontSize="large"/>
            case  12:
            case  13:
            case  14:
                return <WbCloudyIcon style={{ fill: '#F0F8FF' }} fontSize="large"/>
            case  15:
            case  16:
            case  17:
            case  18:
            case  19:
            case  20:
            default:
        }
    }

    function mapWeatherData(data) {
        let precipitationLevel = data.timeSeries[0].parameters.find((p) => p.name==='pcat').values[0]
        const precipitation = precipitationCats.find(pre => pre.level === precipitationLevel)
        let weatherSituationVal = data.timeSeries[0].parameters.find((p) => p.name ==='Wsymb2').values[0]
        const weatherSituation = weatherSituations.find(wea => wea.value ===weatherSituationVal)
        return {
            temperature: data.timeSeries[0].parameters.find((p) => p.name==='t').values[0],
            humidity: data.timeSeries[0].parameters.find((p) => p.name==='r').values[0],
            precipitation: precipitation.description,
            weatherSituation:weatherSituation.meaning,
            weatherIcon: getWeatherIcon(weatherSituation.value)
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

