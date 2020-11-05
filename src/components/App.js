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
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ authenticated }, dispatch);
// }

// const mapStateToProps = (state) => {
//   return {
//     auth: state.auth
//   }
// }

export default connect()(App)