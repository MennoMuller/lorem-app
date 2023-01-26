import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import Websites from "./pages/Websites";
import Weather from "./pages/Weather";
import Sidebar from "./components/Sidebar";

import avatar from "./img/avatar.jpg";

class App extends React.Component {
  state = {
    user: {},
    tasks: [],
    websites: [],
    geo: {
      name: "",
      state: "",
      country: ""
    },
    current: {
      main: { temp: "", feels_like: "" },
      weather: [{ icon: "", main: "" }],
      wind: { speed: "" }
    },
    predictions: [],
    date: new Date()
  };

  APIKey = "a41f22726acb8cb21959b4d538ac9093";

  getDefaultIconUrl = (url) => {
    const firstPoint = url.indexOf(".");
    let secondPoint = url.indexOf(".", firstPoint + 1);
    if (
      url.substring(firstPoint, secondPoint).includes("/")
    ) {
      secondPoint = firstPoint;
    }
    const baseEnd = url.indexOf("/", secondPoint);
    let urlBase =
      baseEnd == -1 ? url : url.substring(0, baseEnd);
    if (!urlBase.includes("http")) {
      urlBase = "http://" + urlBase;
    }
    return urlBase + "/favicon.ico";
  };

  compareTasks(a, b) {
    if (!a.deadline_date) {
      if (!b.deadline_date) {
        return 0;
      } else {
        return 1;
      }
    }
    if (!b.deadline_date) {
      return -1;
    }
    let aDeadline, bDeadline;
    if (a.deadline_time) {
      aDeadline = Date.parse(
        a.deadline_date + " " + a.deadline_time
      );
    } else {
      aDeadline = Date.parse(a.deadline_date);
    }
    if (b.deadline_time) {
      bDeadline = Date.parse(
        b.deadline_date + " " + b.deadline_time
      );
    } else {
      bDeadline = Date.parse(b.deadline_date);
    }

    if (aDeadline < bDeadline) {
      return -1;
    }
    if (aDeadline > bDeadline) {
      return 1;
    }
    return 0;
  }

  toggleComplete = (index) => {
    console.log(index + " completeness toggle");
  };

  tick = () => {
    this.setState({ date: new Date() });
  };

  handleUser = () => {
    fetch("data/user.json")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          user: data
        });
        this.handleLocationUpdate(data.city);
      });
  };

  handleTasks = () => {
    fetch("data/tasks.json")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          tasks: data
        })
      );
  };

  handleWebsites = () => {
    fetch("data/websites.json")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          websites: data
        })
      );
  };

  handleLocationUpdate = (city) => {
    fetch(
      "http://api.openweathermap.org/geo/1.0/direct?q=" +
        city +
        "&limit=1&appid=" +
        this.APIKey
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data[0]);
        this.setState(
          {
            geo: data[0]
          },
          () => {
            this.handleWeatherUpdate();
            this.handleForecastUpdate();
          }
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleWeatherUpdate = () => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?lat=" +
        this.state.geo.lat +
        "&lon=" +
        this.state.geo.lon +
        "&units=metric&appid=" +
        this.APIKey
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          current: data
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleForecastUpdate = () => {
    fetch(
      "https://api.openweathermap.org/data/2.5/forecast?lat=" +
        this.state.geo.lat +
        "&lon=" +
        this.state.geo.lon +
        "&units=metric&appid=" +
        this.APIKey
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.list);
        this.setState({ predictions: data.list });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.handleUser();
    this.handleWebsites();
    this.handleTasks();
  }

  render() {
    return (
      <div className="app-grid">
        <Header
          date={this.state.date}
          tick={this.tick}
        />
        <Sidebar
          avatar={avatar}
          username={this.state.user.username}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Dashboard
                weather={this.state.current}
                websites={this.state.websites}
                tasks={this.state.tasks}
                date={this.state.date}
                compareTasks={this.compareTasks}
                iconGetter={this.getDefaultIconUrl}
              />
            }
          />
          <Route
            path="/tasks"
            element={
              <Tasks
                tasks={this.state.tasks}
                toggleComplete={this.toggleComplete}
                date={this.state.date}
                compareTasks={this.compareTasks}
              />
            }
          />
          <Route
            path="/websites"
            element={
              <Websites
                websites={this.state.websites}
                iconGetter={this.getDefaultIconUrl}
              />
            }
          />
          <Route
            path="/weather"
            element={
              <Weather
                onLocationUpdate={this.handleLocationUpdate}
                weather={{
                  geo: this.state.geo,
                  current: this.state.current,
                  predictions: this.state.predictions
                }}
              />
            }
          />
        </Routes>
      </div>
    );
  }
}

export default App;
