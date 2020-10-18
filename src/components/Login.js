import React from 'react'

export default function Login() {
    return (
        <div>
            <form>
                <h1>Login</h1>
                <div>
                <input type="text" name="username" placeholder="Username" />
                <label htmlFor="username">Username</label>
                </div>
                <div>
                <input type="password" name="password" placeholder="Password" />
                <label htmlFor="password">Password</label>
                </div>
                <input type="submit" value="Login" />
            </form>;
        </div>
    )
}