import React from 'react';
import { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'weather-icons/css/weather-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Login from './Login'
import Calendar from './Calendar'
import Weather from './Weather'
import Home from './Home'

const WEATHER_API_KEY = "570b7f928d8c50ad8439997bee3747d8"

//api.openweathermap.org/data/2.5/weather?q={city name},{state code}&appid={API key}

function App() {
  return (
    <Router>
      <div>
        <header>
            <ul>
              <Switch>
                <Route exact path="/" component={Weather} />
                <Route exact path="/login" component={Login} />
                {/* <Route exact path="/calendar" component={Calendar} /> */}
                {/* <Route exact path="/weather" component={Weather} /> */}
              </Switch>
            </ul>
        </header>
      </div>
    </Router>
  );
}

export default App;
