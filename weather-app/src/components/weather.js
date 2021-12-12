import React from 'react';
import './styles.css';
import { Card } from 'semantic-ui-react';
import moment from 'moment';


const CardExampleCard = ({weatherData}) => (
    <Card>
        <Card.Content>
            <Card.Header className="header">Uppsala</Card.Header>
            <p>Temperature: {weatherData.temperature} &deg;C</p>
            <p>Humidity: { weatherData.humidity } % </p>
            <p>Precipitation: { weatherData.precipitation }</p>
            <p>Day: {moment().format('dddd')}</p>
            <p>Date: {moment().format('LL')}</p>
        </Card.Content>
    </Card>
)

export default CardExampleCard;