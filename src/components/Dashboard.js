import React, { useState, useEffect } from 'react';
import Header from './Header';
import WeatherDetails from './WeatherDetails';
import HourlyForecast from './HourlyForecast';
import FiveDaysForecast from './FiveDaysForecast';
import './Dashboard.css';
import axios from 'axios';

const Dashboard = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });
  const [location, setLocation] = useState('Fetching location...');
  const [coordinates, setCoordinates] = useState({ latitude: null, longitude: null });
  const [temperature, setTemperature] = useState(null);
  const [feelsLike, setFeelsLike] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [windSpeed, setWindSpeed] = useState(null);
  const [pressure, setPressure] = useState(null);
  const [uvIndex, setUvIndex] = useState(null);
  const [sunrise, setSunrise] = useState(null);
  const [sunset, setSunset] = useState(null);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('darkMode', newMode);
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          setCoordinates({ latitude, longitude });
          fetchAddress(latitude, longitude);  // Fetch the street name using coordinates
        },
        (error) => {
          console.error('Error getting geolocation:', error);
          setLocation('Unable to determine location');
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  useEffect(() => {
    if (coordinates.latitude && coordinates.longitude) {
      fetchWeatherData(coordinates.latitude, coordinates.longitude);
    }
  }, [coordinates]);

  const fetchWeatherData = async (latitude, longitude) => {
    const apiKey = 'c3ee4853d0ff40a990991221242708';
    const weatherUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${latitude},${longitude}&aqi=no`;
  
    try {
      const response = await axios.get(weatherUrl);
      const weatherData = response.data.current; // Access the current weather data
  
      setTemperature(weatherData.temp_c); // Get temperature in Celsius
      setFeelsLike(weatherData.feelslike_c); // Get feels-like temperature in Celsius
      setHumidity(weatherData.humidity); // Get humidity
      setWindSpeed(weatherData.wind_kph); // Get wind speed in kph
      setPressure(weatherData.pressure_mb); // Get pressure in hPa
      setUvIndex(weatherData.uv); // Get UV index
      setSunrise(weatherData.sunrise); // Get sunrise time
      setSunset(weatherData.sunset); // Get sunset time
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setTemperature('N/A');
    }
  };
  

  const fetchAddress = async (latitude, longitude) => {
    const apiKey = 'pk.85fe6babfbc8b1c4cab2394da9d8bf8b';
    const geocodeUrl = `https://us1.locationiq.com/v1/reverse.php?key=${apiKey}&lat=${latitude}&lon=${longitude}&format=json`;
  
    try {
      const response = await axios.get(geocodeUrl);
      const address = response.data.display_name || 'Location not found';
      setLocation(address);
    } catch (error) {
      console.error('Error fetching address:', error);
      setLocation('Unable to fetch address');
    }
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    const query = event.target.elements.search.value;
    // Fetch weather data for the searched location (coordinates based on the query)
    // You might need to convert the query into coordinates using a geocoding API
  };

  return (
    <div className={`dashboard ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="search-container">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            name="search"
            placeholder="Search for your preffered city..."
            className={`search-input ${isDarkMode ? 'dark' : 'light'}`}
          />
          <button type="submit" className={`search-icon ${isDarkMode ? 'dark' : 'light'}`}>
            <i className={`bi bi-search`}></i>
          </button>
        </form>
      </div>
      <div className={`toggle-container ${isDarkMode ? 'dark' : ''}`}>
        <input
          type="checkbox"
          id="dark-mode-toggle"
          checked={isDarkMode}
          onChange={toggleDarkMode}
          className="toggle-checkbox" // Optional: for styling
        />
        <label htmlFor="dark-mode-toggle" className="toggle-switch"></label>
        </div>
        <span className="toggle-label">Dark Mode</span>
      
  
      <div className="header-weather-container">
        <Header isDarkMode={isDarkMode} location={location} />
        <WeatherDetails
          isDarkMode={isDarkMode}
          temperature={temperature}
          feelsLike={feelsLike}
          humidity={humidity}
          windSpeed={windSpeed}
          pressure={pressure}
          uvIndex={uvIndex}
          sunrise={sunrise}
          sunset={sunset}
        />
      </div>
  
      <div className="forecast-container">
        <FiveDaysForecast isDarkMode={isDarkMode} />
        <HourlyForecast isDarkMode={isDarkMode} />
      </div>
    </div>
  );
  
};

export default Dashboard;
