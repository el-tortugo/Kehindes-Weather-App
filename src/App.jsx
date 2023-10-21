import React from 'react';
import SingleDetailContainer from './app-containers/single-detail-container';
import WeatherList from './app-components/weather-list';

function App() {
  return (
    <div className="App">
      <h1>Kehinde's Weather App</h1>
      <h2>Look up the weather in New York, NY!</h2>
      <SingleDetailContainer />
      <WeatherList />
    </div>
  );
}

export default App;