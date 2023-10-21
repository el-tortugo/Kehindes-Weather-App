import React, { useState, useEffect } from 'react';
import './weather-list.css';

const WeatherList = () => {
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    const API_KEY = '8db976b8bb5c459e8b3f53f4ecae2c1c';
    const url = `https://api.weatherbit.io/v2.0/forecast/daily?city=New%20York,NY&days=7&key=${API_KEY}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setForecast(data.data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>7-Day Weather Forecast</h1>
      <ul className="weather-list">
        {forecast.map((day, index) => (
          <li key={index}>
            <p>{new Date(day.valid_date).toLocaleDateString()}</p>
            <p>High: {day.high_temp}°C</p>
            <p>Low: {day.low_temp}°C</p>
            <p>Description: {day.weather.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WeatherList;