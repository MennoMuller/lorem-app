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
            .sort(this.props.compareTasks)
            .map((task) => (
              <TaskItem
                key={task.id}
                name={task.name}
                category={task.category}
                complete={task.complete}
                index={task.id}
                toggleComplete={this.props.toggleComplete}
              />
            ))}
        </div>
      </div>
    );
  }
}

export default TasksCompleted;
