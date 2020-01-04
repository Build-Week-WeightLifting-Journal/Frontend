import React, { useState } from "react";
import { Route, Link } from "react-router-dom";
import Calendar from "./Calendar";

const Login = props => {

    const [login, setLogin] = useState({
        username: "",
        password: ""
      });

    const handleChanges = e => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        });
        console.log(e.target.name);
    };

    const submitForm = e => {
        e.preventDefault();
        props.addNewLogin(login);
        setLogin({ username: "", password: "" });
    };

    return (
        <div>
            <h2>Welcome Back!</h2>
            <form onSubmit={submitForm} >
                <label htmlFor="username">username</label>
                <input
                    id="username"
                    type="text"
                    placeholder="username"
                    onChange={handleChanges}
                    name="username"
                    value={login.username}
                />
                <label htmlFor="password">password</label>
                <input
                    id="password"
                    type="text"
                    placeholder="password"
                    onChange={handleChanges}
                    name="password"
                    value={login.password}
                />

                <Link to="/calendar">
                    <button type="submit">Enter</button>
                </Link>
                <Route path="/calendar">
                    <Calendar />
                </Route>
            </form>
        </div>
    );
}

export default Login;