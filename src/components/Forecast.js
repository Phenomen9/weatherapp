import React from 'react';
import FiveDaysForecast from './FiveDaysForecast';
import HourlyForecast from './HourlyForecast';
import './Forecast.css';

const Forecast = () => {
  return (
    <div className="forecast">
      <FiveDaysForecast />
      <HourlyForecast />
    </div>
  );
};

export default Forecast;
