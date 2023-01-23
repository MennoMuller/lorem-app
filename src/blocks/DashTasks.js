import React from "react";
import { Link } from "react-router-dom";
import TaskItem from "../components/TaskItem";

class DashTasks extends React.Component {
  render() {
    return (
      <div className="grid-item item-a">
        <div className="dash-header-box">
          <h2>My tasks</h2>
          <Link to="./tasks">See all</Link>
        </div>
        <div className="list-wrapper">
          {this.props.tasks
            .filter((task) => !task.complete)
            .sort(this.props.compareTasks)
            .slice(0, 3)
            .map((task, index) => (
              <TaskItem
                key={index}
                name={task.name}
                category={task.category}
                complete={task.complete}
                index={index}
                toggleComplete={this.props.toggleComplete}
                deadline_date={task.deadline_date}
                deadline_time={task.deadline_time}
                date={this.props.date}
              />
            ))}
        </div>
      </div>
    );
  }
}
export default DashTasks;
