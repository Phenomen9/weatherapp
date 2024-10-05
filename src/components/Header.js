import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = ({ isDarkMode, location }) => {
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    // Function to update the time every second
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
      setCurrentDate(now.toLocaleDateString([], { weekday: 'long', day: 'numeric', month: 'short' }));
    };

    // Set an interval to update the time every second
    const intervalId = setInterval(updateTime, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={`header ${isDarkMode ? 'dark' : 'light'}`}>
      <h1>{location}</h1>
      <h2>{currentTime}</h2>
      <p>{currentDate}</p>
    </div>
  );
};

export default Header;
