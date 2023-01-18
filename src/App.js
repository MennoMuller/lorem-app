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
  render() {
    return (
      <div className="app-grid">
        <Header />
        <div className="sidebar">
          <Logo />
          <Avatar
            image={avatar}
            username="Menno Muller"
          />
          <nav>
            <ul>
              <li>
                <NavLink to="/">
                  <img
                    src={dashboardIcon}
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
                    className="nav-icon"
                  />
                  <span className="nav-text">Tasks</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/websites">
                  <img
                    src={websitesIcon}
                    className="nav-icon"
                  />
                  <span className="nav-text">Websites</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/weather">
                  <img
                    src={weatherIcon}
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
            element={<Dashboard />}
          />
          <Route
            path="/tasks"
            element={<Tasks />}
          />
          <Route
            path="/websites"
            element={<Websites />}
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
