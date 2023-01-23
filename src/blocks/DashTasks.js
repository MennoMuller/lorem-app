import React from "react";
import { Link } from "react-router-dom";
import TaskItem from "../components/TaskItem";

class DashTasks extends React.Component {
  compare(a, b) {
    if (!a.deadline_date) {
      if (!b.deadline_date) {
        return 0;
      } else {
        return 1;
      }
    }
    if (!b.deadline_date) {
      return -1;
    }
    let aDeadline, bDeadline;
    if (a.deadline_time) {
      aDeadline = Date.parse(
        a.deadline_date + " " + a.deadline_time
      );
    } else {
      aDeadline = Date.parse(a.deadline_date);
    }
    if (b.deadline_time) {
      bDeadline = Date.parse(
        b.deadline_date + " " + b.deadline_time
      );
    } else {
      bDeadline = Date.parse(b.deadline_date);
    }

    if (aDeadline < bDeadline) {
      return -1;
    }
    if (aDeadline > bDeadline) {
      return 1;
    }
    return 0;
  }
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
            .sort(this.compare)
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
