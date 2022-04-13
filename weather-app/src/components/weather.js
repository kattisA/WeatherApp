import React from 'react';
//import './styles.css';
import moment from 'moment';
import {Card, CardContent, Typography, Grid, Box} from "@material-ui/core";
import {yellow} from "@material-ui/core/colors";
import {WiRaindrops, WiSleet} from "weather-icons-react";


// Explore material ui theme: https://mui.com/customization/color/

var cardStyle = {
    display: 'block',
    width: '40vw',
    transitionDuration: '0.3s',
    height: '20vw',
    borderRadius: 20,
    backgroundColor: "#abd2e4",
    opacity: '0.85',
    
    padding: '20px'
}


const WeatherCard = ({weatherData}) => (

    <Card style={cardStyle}>
        <CardContent>
            <Grid container direction="row" justifyContent="space-between">
                <Grid item >
                    <Typography variant="h4" component="h2">
                    Uppsala
                    </Typography>
                    <Typography variant="h3" component="h2">
                        {weatherData.temperature} &deg;C
                    </Typography>
                    <Typography align="left" variant="h5" component="h2" style={{paddingTop:80}}>
                        <Box s={{
                            fontSize: 'h6.fontSize',
                            m: 1,
                            fontStyle: 'italic',
                            p:1
                        }}>
                            <div style={{ display: 'flex',
                                alignItems: 'center',
                                flexWrap: 'wrap'}}>
                                <span>Humidity { weatherData.humidity } %</span>
                                <WiRaindrops style={{fill: '#4682B4', paddingBottom:0}} size={50} />
                            </div>
                        </Box>
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="h5" component="h2">
                        {moment().format('dddd')}, {moment().format('LL')}
                    </Typography>
                    <Typography align="right">
                        { weatherData.weatherIcon }
                    </Typography>
                    <Typography variant="h5" component="h2" align="right">
                        { weatherData.weatherSituation }
                    </Typography>
                    <Typography variant="h5" component="h2" align="right">
                        { weatherData.precipitation }
                    </Typography>
                </Grid>
            </Grid>



        </CardContent>
    </Card>
)

export default WeatherCard;