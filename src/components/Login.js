import React from "react";
import styles from "../styles/styles.css"; 

function Login() {
    return (
        <div className="login-container">
            <h1>Login</h1>
            <form>
                <label>Username:</label>
                <input type="text" name="username" />
                <label>Password:</label>
                <input type="password" name="password" />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}
export default Login;