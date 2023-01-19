import React from "react";
import TasksCompleted from "../blocks/TasksCompleted";
import TasksMain from "../blocks/TasksMain";
import TasksProgress from "../blocks/TasksProgress";

const Tasks = (props) => {
  return (
    <div className="main-wrapper">
      <h1>Tasks</h1>
      <div className="main-grid">
        <TasksMain
          tasks={props.tasks}
          toggleComplete={props.toggleComplete}
          date={props.date}
        />
        <TasksProgress
          tasksLeft={-2}
          completedTasks={13}
          totalTasks={12}
        />
        <TasksCompleted
          tasks={props.tasks}
          toggleComplete={props.toggleComplete}
        />
      </div>
    </div>
  );
};

export default Tasks;
