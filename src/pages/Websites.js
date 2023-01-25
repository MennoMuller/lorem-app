import React from "react";
import WebsiteClicks from "../blocks/WebsiteClicks";
import WebsiteMain from "../blocks/WebsiteMain";

const Websites = (props) => {
  return (
    <div className="main-wrapper">
      <h1>Favorite websites</h1>
      <div className="main-grid">
        <WebsiteMain
          websites={props.websites}
          iconGetter={props.iconGetter}
        />
        <WebsiteClicks
          websites={props.websites}
          iconGetter={props.iconGetter}
        />
        <div className="grid-item item-c">
          Random quote of the day
        </div>
      </div>
    </div>
  );
};

export default Websites;
