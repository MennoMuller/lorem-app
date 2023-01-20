import React from "react";
import { useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import ModifyTaskMenu from "./ModifyTaskMenu";
import "./TaskItem.css";

const TaskItem = (props) => {
  const [popup, setPopup] = useState(false);
  const [menu, setMenu] = useState(false);
  return (
    <div
      className={
        props.complete ? "task-item complete" : "task-item"
      }
    >
      <div className="task-info">
        <span className="category-label">
          {props.category}
        </span>
        <h4 className="task-label">{props.name}</h4>
      </div>
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
                  console.log("delete task " + props.index)
                }
              >
                Delete task
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
                Modify task
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
      <label className="check-container">
        <input
          type="checkbox"
          checked={props.complete}
          onChange={() => props.toggleComplete(props.index)}
        ></input>
        <span className="checkmark"></span>
      </label>
    </div>
  );
};

export default TaskItem;
