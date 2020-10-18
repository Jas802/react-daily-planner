import React from 'react';
import { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './Login'
import Calendar from './Calendar'
import Weather from './Weather'
import Home from './Home'

function App() {
  return (
    <Router>
      <div>
        <header>
            <ul>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/calendar" component={Calendar} />
                <Route exact path="/weather" component={Weather} />
              </Switch>
            </ul>
        </header>
      </div>
    </Router>
  );
}

export default App;
