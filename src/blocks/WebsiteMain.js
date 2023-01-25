import React from "react";
import ClickAwayListener from "react-click-away-listener";
import ModifySiteMenu from "../components/ModifySiteMenu";
import ModifyTaskMenu from "../components/ModifyTaskMenu";
import SiteItem from "../components/SiteItem";

class WebsiteMain extends React.Component {
  filter = null;
  menu = false;

  render() {
    return (
      <div className="grid-item item-a">
        <h2>My favorite websites</h2>

        <div className="list-wrapper">
          {this.props.websites
            .sort((a, b) => b.clicks - a.clicks)
            .map((site) => (
              <SiteItem
                key={site.id}
                name={site.name}
                icon={site.icon}
                index={site.id}
                description={site.description}
                url={site.url}
                iconGetter={this.props.iconGetter}
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
              <ModifySiteMenu modify={false} />
            </div>
          </ClickAwayListener>
        )}
      </div>
    );
  }
}

export default WebsiteMain;
