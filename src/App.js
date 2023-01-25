import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Logo from "./components/Logo";
import Avatar from "./components/Avatar";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import Websites from "./pages/Websites";
import Weather from "./pages/Weather";

import avatar from "./img/avatar.jpg";
import dashboardIcon from "./img/dashboard.png";
import tasksIcon from "./img/tasks.png";
import websitesIcon from "./img/websites.png";
import weatherIcon from "./img/weather.png";

class App extends React.Component {
  state = {
    user: {},
    tasks: [],
    websites: [],
    date: new Date()
  };

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

  handleUser = (user) => {
    let userObject = JSON.parse(user);
    this.setState({
      user: userObject
    });
  };

  handleTasks = (tasks) => {
    let tasksObject = JSON.parse(tasks);
    this.setState({
      tasks: tasksObject
    });
  };

  handleWebsites = (sites) => {
    let sitesObject = JSON.parse(sites);
    this.setState({
      websites: sitesObject
    });
  };

  userJson = `{
  "id": 1,
  "username": "Menno Muller",
  "email": "menno.muller@itvitaelearning.nl",
  "password": "ThisIsMyPa$$word123",
  "avatar": "img/avatar.jpg"
}`;

  tasksJson = `[
  {
    "id": 1,
    "name": "Do something",
    "category": "Social",
    "deadline_date": "2023-01-25",
    "deadline_time": "13:30",
    "complete": false,
    "user_id": 1
  },
  {
    "id": 2,
    "name": "Do something else",
    "category": "Misc",
    "deadline_date": "2023-02-22",
    "complete": true,
    "user_id": 1
  },
  {
    "id": 3,
    "name": "Do something without a deadline",
    "category": "Misc",
    "complete": false,
    "user_id": 1
  },
  {
    "id": 4,
    "name": "Do something for school",
    "category": "School",
    "deadline_date": "2023-02-22",
    
    "complete": false,
    "user_id": 1
  },
  {
    "id": 5,
    "name": "Do something at home",
    "category": "Home",
    "deadline_date": "2023-02-10",
    "deadline_time": "13:30",
    "complete": false,
    "user_id": 1
  },
  {
    "id": 6,
    "name": "Do something in the past",
    "category": "Home",
    "deadline_date": "2023-01-19",
    "deadline_time": "18:30",
    "complete": false,
    "user_id": 1
  },{
    "id": 7,
    "name": "Do something today",
    "category": "Home",
    "deadline_date": "2023-01-20",
    "deadline_time": "18:30",
    "complete": false,
    "user_id": 1
  }
]
`;

  websitesJson = `[
  {
    "id": 1,
    "url": "google.com",
    "name": "Google",
    "description": "Search engine.",
    "clicks": 10,
    "user_id": 1
  },
  {
    "id": 2,
    "url": "stackoverflow.com",
    "name": "Stack Overflow",
    "description": "Answers to programming questions",
    "clicks": 15,
    "user_id": 1
  },
  {
    "id": 3,
    "url": "w3schools.com",
    "name": "W3Schools",
    "description": "Source of information about programming.",
    "clicks": 20,
    "user_id": 1
  },
  {
    "id": 4,
    "url": "go.com",
    "name": "Go.com",
    "description": "Website without https, included for testing purposes",
    "clicks": 3,
    "user_id": 1
  },
  {
    "id": 5,
    "url": "reactjs.org",
    "name": "ReactJS",
    "description": "Site without www, included for testing purposes",
    "clicks": 4,
    "user_id": 1
  },
  {
    "id": 6,
    "url": "computer.howstuffworks.com/internet/basics/question180.htm",
    "name": "HowStuffWorks",
    "description": "Site with something other than www, included for testing purposes",
    "clicks": 2,
    "user_id": 1
  }
]`;

  componentDidMount() {
    this.handleUser(this.userJson);
    this.handleWebsites(this.websitesJson);
    this.handleTasks(this.tasksJson);
  }

  render() {
    return (
      <div className="app-grid">
        <Header
          date={this.state.date}
          tick={this.tick}
        />
        <div className="sidebar">
          <div className="sidebar-header">
            <Logo />
            <Avatar
              image={avatar}
              username={this.state.user.username}
            />
          </div>
          <nav>
            <ul>
              <li>
                <NavLink to="/">
                  <img
                    src={dashboardIcon}
                    alt=""
                    className="nav-icon"
                  />
                  <span className="nav-text">
                    Dashboard
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/tasks">
                  <img
                    src={tasksIcon}
                    alt=""
                    className="nav-icon"
                  />
                  <span className="nav-text">Tasks</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/websites">
                  <img
                    src={websitesIcon}
                    alt=""
                    className="nav-icon"
                  />
                  <span className="nav-text">Websites</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/weather">
                  <img
                    src={weatherIcon}
                    alt=""
                    className="nav-icon"
                  />
                  <span className="nav-text">Weather</span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <Dashboard
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
            element={<Weather />}
          />
        </Routes>
      </div>
    );
  }
}

export default App;
