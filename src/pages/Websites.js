import React from "react";
import WebsiteClicks from "../blocks/WebsiteClicks";

const Websites = (props) => {
  return (
    <div className="main-wrapper">
      <h1>Favorite websites</h1>
      <div className="main-grid">
        <div className="grid-item item-a">
          My favorite websites
        </div>
        <WebsiteClicks websites={props.websites} />
        <div className="grid-item item-c">
          Random quote of the day
        </div>
      </div>
    </div>
  );
};

export default Websites;
