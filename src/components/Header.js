import React from "react";

class Header extends React.Component {
  state = {
    date: new Date()
  };

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  getDate = () => {
    return (
      this.state.date.getDate() +
      "/" +
      (this.state.date.getMonth() + 1) +
      "/" +
      this.state.date.getFullYear()
    );
  };

  getTime = () => {
    return (
      this.state.date.getHours() +
      ":" +
      (this.state.date.getMinutes() >= 10
        ? this.state.date.getMinutes()
        : "0" + this.state.date.getMinutes()) +
      ":" +
      (this.state.date.getSeconds() >= 10
        ? this.state.date.getSeconds()
        : "0" + this.state.date.getSeconds())
    );
  };

  tick = () => {
    this.setState({ date: new Date() });
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
