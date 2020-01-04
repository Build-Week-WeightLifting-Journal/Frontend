import React, { useState } from "react";
import { Route, Link } from "react-router-dom";
import Calendar from "./Calendar";

const Signup = props => {

    const [signup, setSignup] = useState({
        username: "",
        password: ""
      });

    const handleChanges = e => {
        setSignup({
            ...signup,
            [e.target.name]: e.target.value
        });
        console.log(e.target.name);
    };

    const submitForm = e => {
        e.preventDefault();
        props.addNewSignup(signup);
        setSignup({ username: "", password: "" });
    };

    return (
        <div>
            <h2>Become a Member!</h2>
            <form onSubmit={submitForm} >
                <label htmlFor="username">username</label>
                <input
                    id="username"
                    type="text"
                    placeholder="username"
                    onChange={handleChanges}
                    name="username"
                    value={signup.username}
                />
                <label htmlFor="password">password</label>
                <input
                    id="password"
                    type="text"
                    placeholder="password"
                    onChange={handleChanges}
                    name="password"
                    value={signup.password}
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

export default Signup;