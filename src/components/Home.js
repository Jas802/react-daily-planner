import React, { Component } from 'react';
import Login from './Login';

export default class Home extends Component {
    constructor(props) {
    super(props);

    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    }

    handleSuccessfulAuth(data) {
        console.log("auth home")
        this.props.handleLogin(data);
        this.props.history.push("/calendar")
    }

    render() {
    return (
        <div>
            <h2>Home Page!</h2>
            {this.props.loggedInStatus ? "Welcome! You are logged in" : <Login handleSuccessfulAuth={this.handleSuccessfulAuth} />  
    }
        </div>
        )
    }
}
