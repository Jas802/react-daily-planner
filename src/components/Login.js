import React, { Component } from 'react'

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
        console.log("form submitted")
        event.preventDefault();
    }

    handleChange(event) {
        console.log("handle change", event)
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