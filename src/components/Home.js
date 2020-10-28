import React, { Component } from 'react';
import Login from './Login';

export default class Home extends Component {
    constructor(props) {
    super(props);

    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    }

    handleSuccessfulAuth(data) {
        this.props.handlLogin(data);
        this.props.history.push("/login")
    }

    render() {
    return (
        <div>
            <h2>Home Page!</h2>
            <h2>Status: {this.props.loggedInStatus} </h2>
            <Login handleSuccessfulAuth={this.handleSuccessfulAuth} />
            
        </div>
        )
    }
}
