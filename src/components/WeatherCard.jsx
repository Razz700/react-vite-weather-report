import React from 'react'
import weatherimg from '../assets/weather-cloudy.png'
const WeatherCard = ({weatherdetails}) => {
  console.log(weatherdetails);
  return (
    <div className="weather-section">
      <div className="weather-card">
        <div className="weather-temp-c">
          {weatherdetails.current.temp_c}<sup>o</sup>C
        </div>
        <div className="weatherinfo">
          <span>
            Humidity:{weatherdetails.current.humidity}
          </span>
          <span>
            Cloud:{weatherdetails.current.cloud}
          </span>
        </div>
        <div className="weather-place">
        <span>
            {weatherdetails.location.name}, {weatherdetails.location.region},    {weatherdetails.location.country}
          </span>
        </div>
        <div className="weather-avatar">
          <img src={weatherimg} alt="weather icon" />
        </div>
      </div>
    </div>
  )
}

export default WeatherCard