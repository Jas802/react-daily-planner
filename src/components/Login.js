import React, { Component } from 'react';
import UsernameForm from './UsernameForm';
import axios from 'axios';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event, username) {
        event.preventDefault();
        //for a login go to the /sessions endpoint
        axios.post("http://localhost:3001/api/registrations", {
            user: { //data argument must be passed in as object
                username
            }
        },
        // { withCredentials: true} // tells API to set cookie in the client
        ).then(response => {
            if (response.data.status === 'created') {
                this.props.handleSuccessfulAuth(response.data)
            }
        }).catch(error => {
            console.log("registration error", error)
        })
    }
    
    render() {
    return(
        <UsernameForm formType="Login" handleSubmit={this.handleSubmit} />
        )
    }
}