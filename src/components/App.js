import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/app.css'

import EventsContainer from '../containers/EventsContainer'
import WeatherList from '../containers/WeatherList'
import Calendar from './Calendar'
import Home from './Home'

class App extends Component {
  
  render() {
    return (
      <Router>
        <div>
          <header>
            <ul className="horizontal-list">
              <li>
              <Link to="/">Home</Link>
              </li>
              <li>
              <Link to="/weather">Weather</Link>
              </li>
              <li>
              <Link to="/calendar">Calendar</Link>
              </li>
              <li>
                <Link to="/events">Notes</Link>
              </li>
            </ul>
          </header>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/weather" component={WeatherList} />
            <Route path="/calendar" component={Calendar} />
            <Route path="/events" component={EventsContainer} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default connect()(App)