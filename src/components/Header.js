import React from "react";

class Header extends React.Component {
  componentDidMount() {
    this.timerID = setInterval(
      () => this.props.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  getDate = () => {
    return (
      this.props.date.getDate() +
      "/" +
      (this.props.date.getMonth() + 1) +
      "/" +
      this.props.date.getFullYear()
    );
  };

  getTime = () => {
    return (
      this.props.date.getHours() +
      ":" +
      (this.props.date.getMinutes() >= 10
        ? this.props.date.getMinutes()
        : "0" + this.state.date.getMinutes()) +
      ":" +
      (this.props.date.getSeconds() >= 10
        ? this.props.date.getSeconds()
        : "0" + this.props.date.getSeconds())
    );
  };

  render() {
    return (
      <header>
        <span className="date">{this.getDate()}</span>
        <span className="time">{this.getTime()}</span>
      </header>
    );
  }
}

export default Header;
