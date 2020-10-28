import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';

import 'weather-icons/css/weather-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/app.css'

import Login from './Login'
import Calendar from './Calendar'
import Weather from './Weather'
import Home from './Home'

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      loggedInStatus: 'NOT_LOGGED_IN',
      user: {}
    }

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(data) {
  this.setState({
    loggedInStatus: "LOGGED_IN",
    user: data
  })
}
  
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
            <Link to="/login">Login</Link>
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
          <Route 
            exact 
            path={"/"} 
            render={props => (
              <Home {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus} />
            )} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute path="/weather">
            <Weather 
              city={this.state.city} 
              fahrenheit={this.state.fahrenheit}
              temp_max={this.state.temp_max}
              temp_min={this.state.temp_min}
              description={this.state.description}
              />
            </PrivateRoute>
          <PrivateRoute path="/calendar"><Calendar /></PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}
}

function PrivateRoute({ children, ...props}) {
  return (
    
    <Route {...props}
      render={(props) => 
        //This is the test of if a user is authenticated:
        //fetch an API (your own rails get request or Firebase or Netlify) and return the state of authenticated or unauthenticated
        "Logged In" === "Logged In" ?
        //successfully authenticated:
        children :  
        //failed the authenticated test:
        <Redirect 
        to={{
          pathname: "/",
          state: { from: props.location }
        }}
         />
      
      }
    
    />
  )
}