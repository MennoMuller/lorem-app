import React from "react";
import WeatherNow from "../blocks/WeatherNow";
import "./Weather.css";

const Weather = (props) => {
  return (
    <div className="main-wrapper">
      <h1>Weather</h1>
      <div className="main-grid">
        <div className="grid-item item-a">
          Weather forecast
        </div>
        <WeatherNow
          temperature={99}
          feelsLike={-99}
          icon="50d"
          description="Microwave"
          wind={98}
          rain={10.5}
        />
        <div className="grid-item item-c">Location</div>
      </div>
    </div>
  );
};

export default Weather;
