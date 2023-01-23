import React from "react";

class ModifySiteMenu extends React.Component {
  render() {
    return (
      <div className="grid-item popup-window">
        <h2>
          {this.props.modify
            ? "Modify website"
            : "Add a website"}
        </h2>
        <form>
          <div className="form-grid">
            <div className="form-field site-name">
              <label htmlFor="name">
                Name website <span className="red">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={this.props.name}
              />
            </div>
            <div className="form-field site-url">
              <label htmlFor="url">
                Website URL <span className="red">*</span>
              </label>
              <input
                type="text"
                id="url"
                name="url"
                value={this.props.url}
              />
            </div>
            <div className="form-field site-icon-field">
              <label htmlFor="icon">Website icon</label>
              <input
                type="file"
                id="icon"
                name="icon"
                value={this.props.icon}
              />
            </div>
            <div className="form-field site-description-field">
              <label htmlFor="description">
                Website description{" "}
                <span className="red">*</span>
              </label>
              <input
                type="text"
                id="description"
                name="description"
                value={this.props.description}
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
                : "Add website"
            }
          />
        </form>
      </div>
    );
  }
}
export default ModifySiteMenu;
