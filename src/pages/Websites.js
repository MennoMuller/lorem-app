import React from "react";

const Websites = (props) => {
  return (
    <div className="main-wrapper">
      <h1>Favorite websites</h1>
      <div className="main-grid">
        <div className="grid-item item-a">
          My favorite websites
        </div>
        <div className="grid-item item-b">Most clicks</div>
        <div className="grid-item item-c">
          Random quote of the day
        </div>
      </div>
    </div>
  );
};

export default Websites;
