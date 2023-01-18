import React from "react";
import TasksProgress from "../blocks/TasksProgress";

const Tasks = (props) => {
  return (
    <div className="main-wrapper">
      <h1>Tasks</h1>
      <div className="main-grid">
        <div className="grid-item item-a">My tasks</div>
        <TasksProgress
          tasksLeft={-2}
          completedTasks={13}
          totalTasks={12}
        />
        <div className="grid-item item-c">
          Finished tasks
        </div>
      </div>
    </div>
  );
};

export default Tasks;
