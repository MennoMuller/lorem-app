import React from "react";
import DashTasks from "../blocks/DashTasks";
import DashWebsites from "../blocks/DashWebsites";

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
        <DashWebsites
          websites={props.websites}
          iconGetter={props.iconGetter}
        />
        <div className="grid-item item-c">Weather</div>
      </div>
    </div>
  );
};

export default Dashboard;
