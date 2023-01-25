import React from "react";
import ClickAwayListener from "react-click-away-listener";
import ModifySiteMenu from "./ModifySiteMenu";
import "./ListItem.css";

class SiteItem extends React.Component {
  render() {
    let popup = false;
    let menu = false;
    return (
      <div className="list-item site-item">
        <a
          className="site-box"
          href={
            this.props.url.includes("http")
              ? this.props.url
              : "http://" + this.props.url
          }
          onClick={() => {
            console.log(this.props.index + " was clicked");
          }}
        >
          <img
            className="site-icon"
            src={
              this.props.icon
                ? this.props.icon
                : this.props.iconGetter(this.props.url)
            }
          />
          <h4 className="task-label">{this.props.name}</h4>
        </a>
        <p className="site-description">
          {this.props.description}
        </p>
        <button
          className="menu-button"
          onClick={() => (this.popup = true)}
        >
          <div className="meatballs-menu"></div>
        </button>
        {this.popup && (
          <ClickAwayListener
            onClickAway={() => (this.popup = false)}
          >
            <div className="item-menu">
              <li>
                <button
                  className="menu-option"
                  onClick={() =>
                    console.log(
                      "delete website " + this.props.index
                    )
                  }
                >
                  Delete website
                </button>
              </li>
              <li>
                <button
                  className="menu-option"
                  onClick={() => {
                    this.menu = true;
                    this.popup = false;
                  }}
                >
                  Modify website
                </button>
              </li>
            </div>
          </ClickAwayListener>
        )}

        {this.menu && (
          <ClickAwayListener
            onClickAway={() => this.menu == false}
          >
            <div>
              <ModifySiteMenu
                name={this.props.name}
                url={this.props.url}
                icon={this.props.icon}
                modify={true}
              />
            </div>
          </ClickAwayListener>
        )}
      </div>
    );
  }
}

export default SiteItem;
