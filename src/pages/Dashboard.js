import React from "react";
import DashTasks from "../blocks/DashTasks";

const Dashboard = (props) => {
  return (
    <div className="main-wrapper">
      <h1>Dashboard</h1>
      <div className="main-grid">
        <DashTasks
          tasks={props.tasks}
          date={props.date}
          compareTasks={props.compareTasks}
        />
        <div className="grid-item item-b">
          My favorite websites
        </div>
        <div className="grid-item item-c">Weather</div>
      </div>
    </div>
  );
};

export default Dashboard;
