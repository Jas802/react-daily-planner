import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';

import 'weather-icons/css/weather-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'

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
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute path="/weather"><Weather /></PrivateRoute>
          <PrivateRoute path="/calendar"><Calendar /></PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

function PrivateRoute({ children, ...props}) {
  return (
    
    <Route {...props}
      render={(props) => 
        //This is the test of if a user is authenticated:
        //fetch an API (your own rails get request or Firebase or Netlify) and return the state of authenticated or unauthenticated
        "Logged In" === "Logged Out" ?
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
export default App;
