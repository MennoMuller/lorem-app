import React from "react";
import ClickAwayListener from "react-click-away-listener";
import TaskItem from "../components/TaskItem";
import ModifyTaskMenu from "../components/ModifyTaskMenu";

class TasksMain extends React.Component {
  filter = null;
  menu = false;

  render() {
    return (
      <div className="grid-item item-a">
        <h2>My tasks</h2>
        <div className="filters-box">
          <button
            className={
              this.filter == null
                ? "filter-button active-filter"
                : "filter-button"
            }
            onClick={() => (this.filter = null)}
          >
            All tasks
          </button>
          <button
            className={
              this.filter == "School"
                ? "filter-button active-filter"
                : "filter-button"
            }
            onClick={() => (this.filter = "School")}
          >
            School
          </button>
          <button
            className={
              this.filter == "Social"
                ? "filter-button active-filter"
                : "filter-button"
            }
            onClick={() => (this.filter = "Social")}
          >
            Social
          </button>
          <button
            className={
              this.filter == "Home"
                ? "filter-button active-filter"
                : "filter-button"
            }
            onClick={() => (this.filter = "Home")}
          >
            Home
          </button>
          <button
            className={
              this.filter == "Misc"
                ? "filter-button active-filter"
                : "filter-button"
            }
            onClick={() => (this.filter = "Misc")}
          >
            Misc
          </button>
        </div>
        <div className="list-wrapper">
          {(this.filter != null
            ? this.props.tasks
                .filter((task) => !task.complete)
                .filter(
                  (task) => task.category == this.filter
                )
            : this.props.tasks.filter(
                (task) => !task.complete
              )
          )
            .sort(this.props.compareTasks)
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
        <button
          className="add-button"
          onClick={() => (this.menu = true)}
        >
          +
        </button>
        {this.menu && (
          <ClickAwayListener
            onClickAway={() => (this.menu = false)}
          >
            <div>
              <ModifyTaskMenu modify={false} />
            </div>
          </ClickAwayListener>
        )}
      </div>
    );
  }
}

export default TasksMain;
