import React, { useState, useEffect } from 'react';

const WeatherList = () => {
    const [weatherData, setWeatherData] = useState([]);

    useEffect(() => {
        const fetchWeatherData = async () => {
            const response = await fetch(
                'https://api.weatherbit.io/v2.0/current?city=New%20York,NY&key=8db976b8bb5c459e8b3f53f4ecae2c1c');
            const data = await response.json();
            setWeatherData(data.data);
        };
        fetchWeatherData();
    }, []);

    return (
        <div>
            <h1>Weather List</h1>
            <ul>
                {weatherData.map((weather) => (
                    <li key={weather.id}>
                        <p>{weather.weather.description}</p>
                        <p>{weather.temp}°F</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};