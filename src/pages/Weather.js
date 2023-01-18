import React from "react";

const Weather = (props) => {
  return (
    <div className="main-wrapper">
      <h1>Weather</h1>
      <div className="main-grid">
        <div className="grid-item item-a">
          Weather forecast
        </div>
        <div className="grid-item item-b">Weather now</div>
        <div className="grid-item item-c">Location</div>
      </div>
    </div>
  );
};

export default Weather;
