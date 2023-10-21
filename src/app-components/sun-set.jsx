import React, { useState, useEffect } from 'react';

const SunSet = () => {
    const [sunset, setSunset] = useState(null);

    useEffect(() => {
        const API_KEY = '8db976b8bb5c459e8b3f53f4ecae2c1c';
        const url = `https://api.weatherbit.io/v2.0/forecast/daily?city=New%20York,NY&key=${API_KEY}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                setSunset(data.data[0].sunset);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <div className="sun-set-container">
            <h1>Sun Set</h1>
            <h2>Sunset time: {sunset ? new Date(sunset).toLocaleTimeString() : 'Loading...'}</h2>
        </div>
    );
}

export default SunSet;