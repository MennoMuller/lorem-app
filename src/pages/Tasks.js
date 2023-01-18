import React from "react";

const Tasks = (props) => {
  return (
    <div className="main-wrapper">
      <h1>Tasks</h1>
      <div className="main-grid">
        <div className="grid-item item-a">My tasks</div>
        <div className="grid-item item-b">Progress</div>
        <div className="grid-item item-c">
          Finished tasks
        </div>
      </div>
    </div>
  );
};

export default Tasks;
