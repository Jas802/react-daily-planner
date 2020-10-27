import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        axios.post("http://localhost:3001/api/registrations", {
            user: { //data argument must be passed in as object
                username: this.state.username
            }
        },
        { withCredentials: true} // tells API to set cookie in the client
        ).then(response => {
            console.log("registration response", response);
        }).catch(error => {
            console.log("registration error", error)
        })
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    render() {
    return(
        <div className="login-form">
            <form onSubmit={this.handleSubmit} >
                <input 
                    type="username" 
                    name="username" 
                    placeholder="Username" 
                    value={this.state.username} 
                    onChange={this.handleChange} 
                    required 
                />
                <button type="submit">Login</button>
            </form>
        </div>
        )
    }
}