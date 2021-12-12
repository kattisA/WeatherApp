import React from 'react';
import './styles.css';
import { Card } from 'semantic-ui-react'

const CardExampleCard = ({weatherData}) => (
    <Card>
        <Card.Content>
            <Card.Header className="header">Uppsala</Card.Header>
            <p>Temperature: {weatherData.temperature}</p>
            <p>Humidity: { weatherData.humidity } % </p>
        </Card.Content>
    </Card>
)

export default CardExampleCard;