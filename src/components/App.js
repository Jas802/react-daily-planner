import React from 'react';
import { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import 'weather-icons/css/weather-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Login from './Login'
import Calendar from './Calendar'
import Weather from './Weather'
import Home from './Home'

//api.openweathermap.org/data/2.5/weather?q={city name},{state code}&appid={API key}

function App() {
  return (
    <Router>
      <div>
        <header>
          <ul>
            <li>
            <Link to="/">Login</Link>
            </li>
            <li>
            <Link to="/weather">Weather</Link>
            </li>
            <li>
            <Link to="/calendar">Calendar</Link>
            </li>
          </ul>
        </header>
        <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/weather" component={Weather} />
                <Route exact path="/calendar" component={Calendar} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
