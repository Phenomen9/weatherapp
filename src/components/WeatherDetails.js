import React from 'react';
import './WeatherDetails.css';
import sunImg from '../Asset/image/sun.svg';
import humidityImg from '../Asset/image/humidity.svg';
import windImg from '../Asset/image/wind.svg';
import pressureImg from '../Asset/image/pressure.svg';
import uvImg from '../Asset/image/uv.svg';
import sunriseImg from '../Asset/image/sunrise.svg';
import sunsetImg from '../Asset/image/sunset.svg';

const WeatherDetails = ({ 
  isDarkMode, 
  temperature, 
  feelsLike, 
  humidity, 
  windSpeed, 
  pressure, 
  uvIndex, 
  sunrise, 
  sunset 
}) => {
  return (
    <div className={`weather-details ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="temp">
        <h2>{temperature}°C</h2>
        <div className="feels-like-container">
          <p className="feels-like">Feels like:</p>
          <p className="feels-like-temp">{feelsLike}°C</p>
        </div>
        <div className="sun-times">
          <div className="sun-time">
            <img src={sunriseImg} alt="Sunrise" className="sunrise-img" />
            <div className="sun-time-info">
              <p className="sun-label">Sunrise</p>
              <p className="sun-time-value">{sunrise}</p>
            </div>
          </div>
          <div className="sun-time">
            <img src={sunsetImg} alt="Sunset" className="sunset-img" />
            <div className="sun-time-info">
              <p className="sun-label">Sunset</p>
              <p className="sun-time-value">{sunset}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="details">
        <div className="humidity-wind">
          <div className="humidity-container">
            <img src={humidityImg} alt="Humidity" className="humidity-img" />
            <div className="humidity-label-container">
              <p className="humidity">{humidity}%</p>
              <p className="humidity-label">Humidity</p>
            </div>
          </div>
          <div className="wind-container">
            <img src={windImg} alt="Wind" className="wind-img" />
            <div className="wind-label-container">
              <p className="windspeed">{windSpeed} km/h</p>
              <p className="windspeed-label">Wind Speed</p>
            </div>
          </div>
        </div>
        <div className="pressure-uv">
          <div className="pressure-container">
            <img src={pressureImg} alt="Pressure" className="pressure-img" />
            <p className="pressure">{pressure} hPa</p>
            <p className="pressure-label">Pressure</p>
          </div>
          <div className="uv-container">
            <img src={uvImg} alt="UV" className="uv-img" />
            <p className="uv">{uvIndex}</p>
            <p className="uv-label">UV Index</p>
          </div>
        </div>
      </div>
      <div className="sunny-text">
        <img src={sunImg} alt="Sunny" />
        <p>Sunny</p>
      </div>
    </div>
  );
};

export default WeatherDetails;
