import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Alert } from 'react-bootstrap';

import 'weather-icons/css/weather-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/app.css'

import EventsContainer from '../containers/EventsContainer'
import Login from './Login'
import SignUp from './SignUp'
import Calendar from './Calendar'
import WeatherList from '../containers/WeatherList'
import Home from './Home'
import { bindActionCreators } from 'redux'

import { authenticated } from '../actions/actionCreators';


class App extends Component {
  constructor() {
    super();

    // this.state = {
    //   loggedInStatus: false,
    //   user: {}
    // }

    //this.handleLogin = this.handleLogin.bind(this);
    this.handledAuthenticateUser = this.handledAuthenticateUser.bind(this);
  }

  // handleLogin(data) {
  //   this.setState({
  //     loggedInStatus: true,
  //     user: data
  //   })
  // }

  loginAlert() {
    return (
      <Alert bsStyle="danger">
        <strong>Login Please!</strong>
        <Link to='/login'>Login</Link>
      </Alert>
    )
  }

  successAlert() {
    return (
      <Alert bsStyle="success">
        <strong>Welcome!</strong>
      </Alert>
    )
  }
  handledAuthenticateUser(){
    this.props.authenticated();
  }
  
  render() {
    if (this.props.auth.authenticated === false) {
        return <this.loginAlert />;
    }
    return (
      <Router>
        <div>
          <header>
            <ul className="horizontal-list">
              <li>
              <Link to="/">Home</Link>
              </li>
              <li>
                { this.props.auth ? 
                  <Link to="/logout">Logout</Link> :
                  <Link to="/login">Login</Link>
                }
              </li>
              <li>
              <Link to="/weather">Weather</Link>
              </li>
              <li>
              <Link to="/calendar">Calendar</Link>
              </li>
              <li>
                <Link to="/events">Events</Link>
              </li>
            </ul>
          </header>
          <Switch>
            <Route 
              exact 
              path={"/"} 
              // render={props => (
              //   <Home {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus} />
              // )} 
              />
            <Route
              exact
              path="/login"
              render={props => (
                <Login {...props} handleSuccessfulAuth={this.handledAuthenticateUser} auth={this.props.auth}/>
              )} 
             />
             <Route
              exact
              path="/signup"
              render={props => (
                <SignUp {...props} handleSuccessfulAuth={this.handledAuthenticateUser} />
              )} 
             />
            <Route path="/weather" component={WeatherList} />
            <Route path="/calendar" component={Calendar} />
            <Route path="/events" component={EventsContainer} />
          </Switch>
        </div>
      </Router>
    );
  }
}

// function PrivateRoute({ children, ...props}) {
//   return (
    
//     <Route {...props}
    
//       render={(props) => {
//         //console.log(props.isLoggedIn);
//         return(
//           //This is the test of if a user is authenticated:
//           //fetch an API (your own rails get request or Firebase or Netlify) and return the state of authenticated or unauthenticated
//           true == true ?
//           //successfully authenticated:
//           children :  
//           //failed the authenticated test:
//           <Redirect 
//           to={{
//             pathname: "/",
//             state: { from: props.location }
//           }}
//           />
//         )  
          
//         }
//       }
    
//     />
//   )
// }
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ authenticated }, dispatch);
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)