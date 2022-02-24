import React from 'react';
//import './styles.css';
import moment from 'moment';
import {Card, CardContent, Typography, Grid } from "@material-ui/core";
import {yellow} from "@material-ui/core/colors";


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

/*var padding = {
    padding: "20px"
}*/

const WeatherCard = ({weatherData}) => (

    <Card style={cardStyle}>
        <CardContent>
            <Grid container direction="row" justifyContent="space-between">
                <Grid item>
                    <Typography variant="h4" component="h2">
                        Uppsala
                    </Typography>

                </Grid>
                <Grid item>
                    <Typography variant="h5" component="h2">
                        {moment().format('dddd')}, {moment().format('LL')}
                    </Typography>
                    {/*//TODO Instead of sunny icon add icon depending on the weather situation sign*/}
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
            <Typography variant="h3" component="h3">
                {weatherData.temperature} &deg;C
            </Typography>
            <Typography variant="h5" component="h3">
                Humidity { weatherData.humidity } %
            </Typography>

        </CardContent>
    </Card>
)

export default WeatherCard;