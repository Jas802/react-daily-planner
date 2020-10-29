import React, { Component } from 'react';

export default class UsernameForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: ""
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    render() {
    return(
        <div className="login-form">
            <form onSubmit={(event) => this.props.handleSubmit(event, this.state.username)} >
                <input 
                    type="username" 
                    name="username" 
                    placeholder="Username" 
                    value={this.state.username} 
                    onChange={this.handleChange} 
                    required 
                />
                <button type="submit">{this.props.formType}</button>
            </form>
        </div>
        )
    }
}