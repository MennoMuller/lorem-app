import React from "react";
import TaskItem from "../components/TaskItem";

class TasksMain extends React.Component {
  render() {
    return (
      <div className="grid-item item-a list-block">
        <h2>My tasks</h2>
        <div className="list-wrapper completed-tasks">
          {this.props.tasks.map((task, index) => (
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

export default TasksMain;
