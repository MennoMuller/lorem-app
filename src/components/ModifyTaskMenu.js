import React from "react";

class ModifyTaskMenu extends React.Component {
  render() {
    return (
      <div className="grid-item popup-window">
        <h2>
          {this.props.modify ? "Modify task" : "Add a task"}
        </h2>
        <form>
          <div className="form-grid">
            <div className="form-field task-name">
              <label for="name">
                Name task <span className="red">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={this.props.name}
              />
            </div>
            <div className="form-field task-category">
              <label for="category">
                Category <span className="red">*</span>
              </label>
              <select
                id="category"
                name="category"
              >
                <option
                  value="School"
                  selected={this.props.category == "School"}
                >
                  School
                </option>
                <option
                  value="Social"
                  selected={this.props.category == "Social"}
                >
                  Social
                </option>
                <option
                  value="Home"
                  selected={this.props.category == "Home"}
                >
                  Home
                </option>
                <option
                  value="Misc"
                  selected={this.props.category == "Misc"}
                >
                  Misc
                </option>
              </select>
            </div>
            <div className="form-field task-deadline-date">
              <label for="deadline_date">
                Deadline date
              </label>
              <input
                type="date"
                id="deadline_date"
                name="deadline_date"
                value={this.props.deadline_date}
              />
            </div>
            <div className="form-field task-deadline-time">
              <label for="deadline_time">
                Deadline time
              </label>
              <input
                type="time"
                id="deadline_time"
                name="deadline_time"
                value={this.props.deadline_time}
              />
            </div>
          </div>
          <p>
            <span className="red">*</span> mandatory field
          </p>
          <input
            className="submit-button"
            type="submit"
            value={
              this.props.modify
                ? "Save changes"
                : "Add task"
            }
          />
        </form>
      </div>
    );
  }
}
export default ModifyTaskMenu;
