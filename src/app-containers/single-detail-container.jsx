import React from 'react';
import CurrentTemp from './app-components/current-temp';
import SunSet from './app-components/sun-set';
import SunRise from './app-components/sun-rise';
import './weather-container.css';

const WeatherContainer = () => {
    return (
        <div>
            <h1>Weather Information</h1>
            <CurrentTemp />
            <SunRise />
            <SunSet />
        </div>
    );
}

export default WeatherContainer;