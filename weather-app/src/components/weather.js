import React from 'react';
//import './styles.css';
import moment from 'moment';
import {Card, CardContent, Typography, Grid } from "@material-ui/core";

var cardStyle = {
    display: 'block',
    width: '40vw',
    transitionDuration: '0.3s',
    height: '20vw',
    borderRadius: 5,
    backgroundColor: "#abd2e4"
}

var padding = {
    padding: "20px"
}

const WeatherCard = ({weatherData}) => (

    <Card style={cardStyle}>
        <CardContent>
            <Grid container direction="row" justify="space-between">
                <Grid item>
                    <Typography variant="h4" component="h2">
                        Uppsala City
                    </Typography>
                </Grid>
                <Grid item>
                    {moment().format('dddd')}, {moment().format('LL')}
                </Grid>
            </Grid>
            <Typography variant="h4" component="h3">
                {weatherData.temperature} &deg;C
            </Typography>


            <div className="flex">
                <p className="day">{moment().format('dddd')}, <span>{moment().format('LL')}</span></p>
            </div>
            <div className="flex">
                <p className="temp">Humidity: { weatherData.humidity } % </p>
            </div>
            <div className="flex">

                <p className="temp">Precipitation: { weatherData.precipitation }</p>
            </div>
        </CardContent>
    </Card>
)

export default WeatherCard;