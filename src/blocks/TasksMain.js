import React from "react";
import ClickAwayListener from "react-click-away-listener";
import TaskItem from "../components/TaskItem";
import ModifyTaskMenu from "../components/ModifyTaskMenu";
import FilterButton from "../components/FilterButton";

class TasksMain extends React.Component {
  filter = null;
  menu = false;

  render() {
    return (
      <div className="grid-item item-a">
        <h2>My tasks</h2>
        <div className="filters-box">
          <FilterButton
            filter={this.filter}
            myFilter="All tasks"
            setFilter={(filter) => (this.filter = filter)}
          />
          <FilterButton
            filter={this.filter}
            myFilter="School"
            setFilter={(filter) => (this.filter = filter)}
          />
          <FilterButton
            filter={this.filter}
            myFilter="Social"
            setFilter={(filter) => (this.filter = filter)}
          />
          <FilterButton
            filter={this.filter}
            myFilter="Home"
            setFilter={(filter) => (this.filter = filter)}
          />
          <FilterButton
            filter={this.filter}
            myFilter="Misc"
            setFilter={(filter) => (this.filter = filter)}
          />
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
            .map((task) => (
              <TaskItem
                key={task.id}
                name={task.name}
                category={task.category}
                complete={task.complete}
                index={task.id}
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
