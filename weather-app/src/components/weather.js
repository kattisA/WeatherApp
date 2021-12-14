import React from 'react';
import './styles.css';
import { Card } from 'semantic-ui-react';
import moment from 'moment';


const CardExampleCard = ({weatherData}) => (
    <div className="main">
    <Card>
        <Card.Content>
            <Card.Header className="header"> City name: Uppsala</Card.Header>
            <div className="flex">
                <p className="day">Day: {moment().format('dddd')}</p>
                <p className="day">Date: {moment().format('LL')}</p>
            </div>
            <div className="flex">
                <p className="temp">Temperature: {weatherData.temperature} &deg;C</p>
                <p className="temp">Humidity: { weatherData.humidity } % </p>
            </div>
            <div className="flex">

                <p className="temp">Precipitation: { weatherData.precipitation }</p>
            </div>
        </Card.Content>
    </Card>
    </div>
)

export default CardExampleCard;