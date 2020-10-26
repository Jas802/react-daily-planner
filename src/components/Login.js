import React, { Component } from 'react'

class Login extends Component {
    render() {
    return(
        <div>
            <form>
                <h1>Login</h1>
                <div>
                <input type="text" name="username" placeholder="Username" />
                <label htmlFor="username">Username</label>
                </div>
                <input type="submit" value="Login" />
            </form>
        </div>
        )
    }
}

export default Login