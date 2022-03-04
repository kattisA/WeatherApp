import React from 'react';
//import './styles.css';
import moment from 'moment';
import {Card, CardContent, Typography, Grid, Box} from "@material-ui/core";
import {yellow} from "@material-ui/core/colors";
import {WiRaindrops, WiSleet} from "weather-icons-react";


//TODO Explore material ui theme: https://mui.com/customization/color/

var cardStyle = {
    display: 'block',
    width: '40vw',
    transitionDuration: '0.3s',
    height: '20vw',
    borderRadius: 20,
    backgroundColor: "#abd2e4",
    padding: '20px'
}


const WeatherCard = ({weatherData}) => (

    <Card style={cardStyle}>
        <CardContent>
            <Grid container direction="row" justifyContent="space-between">
                <Grid item >
                    <Typography variant="h4" component="h2">
                        <Box sx={{
                            border: '1px solid',
                            borderRadius: 4,
                            borderColor: '#96b7b4' ,
                            p: 1,
                            fontFamily: 'Monospace',
                            fontSize: 'h6.fontSize',
                            m: 1,
                            bgcolor:'#bce5e2'
                        }}>
                            Uppsala
                        </Box>
                    </Typography>
                    <Typography variant="h3" component="h3">
                        {weatherData.temperature} &deg;C
                    </Typography>
                    <Typography variant="h6" component="h3" style={{paddingTop:80}}>
                        <Box sx={{
                            fontSize: 'h6.fontSize',
                            m: 1,
                            fontStyle: 'italic',
                            p:1
                        }}>
                            <div style={{ display: 'flex',
                                alignItems: 'center',
                                flexWrap: 'wrap'}}>
                                <WiRaindrops style={{fill: '#4682B4', paddingBottom:0}} size={50} />
                                <span>Humidity { weatherData.humidity } %</span>
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