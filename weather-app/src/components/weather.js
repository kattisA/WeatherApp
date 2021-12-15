import React from 'react';
//import './styles.css';
import moment from 'moment';
import {Card, CardContent, Typography} from "@material-ui/core";


const WeatherCard = ({weatherData}) => (

    <Card>
        <CardContent>
            <Typography variant="h4"> Uppsala City</Typography>
            <div className="flex">
                <p className="day">{moment().format('dddd')}, <span>{moment().format('LL')}</span></p>
            </div>
            <div className="flex">
                <p className="temp">Temperature: {weatherData.temperature} &deg;C</p>
                <p className="temp">Humidity: { weatherData.humidity } % </p>
            </div>
            <div className="flex">

                <p className="temp">Precipitation: { weatherData.precipitation }</p>
            </div>
        </CardContent>
    </Card>
)

export default WeatherCard;