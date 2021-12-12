import './App.css';
import React, {useEffect, useState} from "react";
import Weather from './components/weather';

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

    function mapWeatherData(data) {
        return {
            temperature: data.timeSeries[0].parameters[10].values[0],
            humidity: data.timeSeries[0].parameters[15].values[0]
        };
    }

  return (
      <div className="App">
          <h1>Weather App</h1>
          <main>
              {(typeof data.approvedTime != 'undefined') ? (
                  <Weather weatherData={mapWeatherData(data)}/>
              ) : (
                  <div></div>
              )}

          </main>
          <footer>
              Page created by Katarina Lejonlid
          </footer>
      </div>
  );
}

