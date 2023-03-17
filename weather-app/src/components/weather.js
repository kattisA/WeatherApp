import React from 'react';
//import './styles.css';
import moment from 'moment';
import {Card, CardContent, Typography, Grid, Box} from "@material-ui/core";
import {WiRaindrops} from "weather-icons-react";


// Explore material ui theme: https://mui.com/customization/color/
// Using the sx property: https://blog.devgenius.io/how-to-use-the-sx-prop-in-mui-v5-4ccfd588836

const cardStyle = {
    display: 'block',
    transitionDuration: '0.3s',
    borderRadius: 20,
    backgroundColor: "#abd2e4",
    opacity: '0.85',
}


const WeatherCard = ({weatherData}) => (

    <Card style={cardStyle}>
        <CardContent>
            <Grid container direction="row" sx={{justifyContent: {xs: 'center', md: 'space-between'}}}>
                <Grid item >
                    <Typography variant="h4" component="h2">
                    Uppsala
                    </Typography>
                    <Typography variant="h3" component="h2">
                        {weatherData.temperature} &deg;C
                    </Typography>
                    <Typography variant="h5" component="h2" style={{paddingTop:80}}>
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
                <Grid item sx={{justifyContent: {xs: 'center', md: 'right'}}} >
                    <Typography variant="h5" component="h2">
                        {moment().format('dddd')}, {moment().format('LL')}
                    </Typography>
                    <Typography>
                        { weatherData.weatherIcon }
                    </Typography>
                    <Typography variant="h5" component="h2" >
                        { weatherData.weatherSituation }
                    </Typography>
                    <Typography variant="h5" component="h2" >
                        { weatherData.precipitation }
                    </Typography>
                </Grid>
            </Grid>
        </CardContent>
    </Card>
)

export default WeatherCard;