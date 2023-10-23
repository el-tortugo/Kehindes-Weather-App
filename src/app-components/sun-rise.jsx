import './sun-rise.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

const SunRise = () => {
    const [sunrise, setSunrise] = useState(null);

    useEffect(() => {
        const API_KEY = '8db976b8bb5c459e8b3f53f4ecae2c1c';
        const url = `https://api.weatherbit.io/v2.0/forecast/daily?city=New%20York,NY&key=${API_KEY}`;

        axios.get(url)
            .then(response => {
                setSunrise(response.data.data[0].sunrise);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <div className="sun-rise-container">
            <h1>Sun Rise</h1>
            <h2>Sunrise time: {sunrise ? new Date(sunrise).toLocaleTimeString() : 'Loading...'}</h2>
        </div>
    );
}

export default SunRise;