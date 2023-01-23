import React from "react";

const ClicksSquare = (props) => {
  return (
    <button className="square">
      <img
        className="square-icon"
        src={props.icon}
      />
      <span className="square-number">{props.clicks}</span>
    </button>
  );
};

export default ClicksSquare;
