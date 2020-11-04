import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import UsernameForm from './UsernameForm';
import axios from 'axios';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            invalidUsername: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(username) {
        axios.post("http://localhost:3001/api/sessions", {  //for a login go to the /sessions endpoint
            user: { //data argument must be passed in as object
                username
            }
        },
        // { withCredentials: true} // tells API to set cookie in the client
        ).then(response => {
            if (response.data.status === 'created') {
                this.props.handleSuccessfulAuth();
            } else {
                this.setState({invalidUsername: true})
            }
        }).then(() => { this.props.history.push('/calendar')
        }).catch(error => {
            console.log("session creation error", error)
        })
    }
    
    render() {
    return(
        <div>
            {this.state.invalidUsername && <h2>Invalid Username. Please try again.</h2>}
            {this.props.auth ? "You are already logged in!" : <UsernameForm formType="Login" handleSubmit={this.handleSubmit} />}
        </div>
        
        )
    }
}