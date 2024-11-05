import React from "react";
import "./Weather.css";

const Weather = () => {
  return (
    <div className="weather-container">
      <div className="left-section">
        <div className="temperature">27°C</div>
        <div className="date">17th Jun '21</div>
        <div className="time">Thursday, 2:45 am</div>
        <div className="weather-details">
          <div>Wind: 10 km/h</div>
          <div>Hum: 54%</div>
          <div>Rain: 0.2%</div>
        </div>
        <div className="forecast">
          <div className="forecast-item">Fri 24°C</div>
          <div className="forecast-item">Sat 24°C</div>
          <div className="forecast-item">Sun 24°C</div>
          <div className="forecast-item">Mon 24°C</div>
        </div>
      </div>

      <div className="right-section">
        <div className="location">Delhi, India</div>
        <div className="sun-details">
          <div className="sun-detail">
            <div>Sunrise</div>
            <div className="time">11:24</div>
          </div>
          <div className="sun-detail">
            <div>Golden Hour</div>
            <div className="time">6:00 AM</div>
          </div>
          <div className="sun-detail">
            <div>Sunset</div>
            <div className="time">7:21</div>
          </div>
        </div>
        <div className="additional-details">
          <div className="additional-detail">
            <div>Air Quality</div>
            <div className="quality">25 Moderate</div>
          </div>
          <div className="additional-detail">
            <div>UV Index</div>
            <div className="uv-index">6/10 High</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
