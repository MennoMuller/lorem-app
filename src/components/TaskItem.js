import React from "react";
import "./TaskItem.css";

const TaskItem = (props) => {
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
        onClick={() => console.log("menu button")}
      >
        <div className="meatballs-menu"></div>
      </button>
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
