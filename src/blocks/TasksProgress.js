import React from "react";

class TasksProgress extends React.Component {
  render() {
    return (
      <div className="grid-item item-b orange">
        <h2>Progress</h2>
        <div className="squares-wrapper">
          <div className="square">
            <span className="square-number">
              {this.props.tasksLeft}
            </span>
            <span className="square-caption square-caption-small">
              tasks left today
            </span>
          </div>
          <div className="square">
            <span className="square-number">
              {this.props.completedTasks}/
              {this.props.totalTasks}
            </span>
            <span className="square-caption">done</span>
          </div>
        </div>
      </div>
    );
  }
}

export default TasksProgress;
