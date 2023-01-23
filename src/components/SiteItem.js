import React from "react";
import { useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import ModifyTaskMenu from "./ModifyTaskMenu";
import "./ListItem.css";

const SiteItem = (props) => {
  const [popup, setPopup] = useState(false);
  const [menu, setMenu] = useState(false);
  return (
    <div className="list-item site-item">
      <a className="site-box">
        <img
          className="site-icon"
          src={props.icon}
        />
        <h4 className="task-label">{props.name}</h4>
      </a>
      <p className="site-description">
        {props.description}
      </p>
      <button
        className="menu-button"
        onClick={() => setPopup(true)}
      >
        <div className="meatballs-menu"></div>
      </button>
      {popup && (
        <ClickAwayListener
          onClickAway={() => setPopup(false)}
        >
          <div className="item-menu">
            <li>
              <button
                className="menu-option"
                onClick={() =>
                  console.log(
                    "delete website " + props.index
                  )
                }
              >
                Delete website
              </button>
            </li>
            <li>
              <button
                className="menu-option"
                onClick={() => {
                  setMenu(true);
                  setPopup(false);
                }}
              >
                Modify website
              </button>
            </li>
          </div>
        </ClickAwayListener>
      )}

      {menu && (
        <ClickAwayListener
          onClickAway={() => setMenu(false)}
        >
          <div>
            <ModifyTaskMenu
              name={props.name}
              category={props.category}
              deadline_date={props.deadline_date}
              deadline_time={props.deadline_time}
              date={props.date}
              modify={true}
            />
          </div>
        </ClickAwayListener>
      )}
    </div>
  );
};

export default SiteItem;
