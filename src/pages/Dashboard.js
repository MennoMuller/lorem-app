import React from "react";

const Dashboard = (props) => {
  return (
    <div className="main-wrapper">
      <h1>Dashboard</h1>
      <div className="main-grid">
        <div className="grid-item item-a">My tasks</div>
        <div className="grid-item item-b">
          My favorite websites
        </div>
        <div className="grid-item item-c">Weather</div>
      </div>
    </div>
  );
};

export default Dashboard;
