import React from 'react';
import './FiveDaysForecast.css';
import sunnycloudImg from '../Asset/image/sunnycloud.svg'; 
import mistimg from '../Asset/image/mist.svg'; 
import sun2img from '../Asset/image/sun2.svg';
import drizzleimg from '../Asset/image/drizzle.svg';
import rainimg from '../Asset/image/rain.svg';

const FiveDaysForecast = ({ isDarkMode }) => {
  return (
    <div className={`daily-forecast ${isDarkMode ? 'dark' : 'light'}`}>
      <h3>5 Days Forecast:</h3>
      <ul>
        <li>
          <img src={sunnycloudImg} alt='sunny cloud' /> 
          <span className="temp">20°C</span>
          <span className="date">Friday, 1 Sep</span>
        </li>
        <li>
          <img src={mistimg} alt='mist' />
          <span className="temp">22°C</span>
          <span className="date">Saturday, 2 Sep</span>
        </li>
        <li>
          <img src={sun2img} alt='sun2' />
          <span className="temp">27°C</span>
          <span className="date">Sunday, 3 Sep</span>
        </li>
        <li> 
          <img src={drizzleimg} alt='drizzle' />
          <span className="temp">18°C</span>
          <span className="date">Monday, 4 Sep</span>
        </li>
        <li>
          <img src={rainimg} alt='rain' />
          <span className="temp">16°C</span>
          <span className="date">Tuesday, 5 Sep</span>
        </li>
      </ul>
    </div>
  );
};

export default FiveDaysForecast;
