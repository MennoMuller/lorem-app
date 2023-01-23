import React from "react";
import TaskItem from "../components/TaskItem";

class TasksCompleted extends React.Component {
  render() {
    return (
      <div className="grid-item item-c">
        <h2>Finished tasks</h2>
        <div className="list-wrapper">
          {this.props.tasks
            .filter((task) => task.complete)
            .map((task, index) => (
              <TaskItem
                key={index}
                name={task.name}
                category={task.category}
                complete={task.complete}
                index={index}
                toggleComplete={this.props.toggleComplete}
              />
            ))}
        </div>
      </div>
    );
  }
}

export default TasksCompleted;
