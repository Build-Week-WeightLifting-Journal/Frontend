import React, { useState } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Calendar from "./components/Calendar";

function App() {
  return (
    <div className="App">
      <nav>
        <div>
          <Link to="/">
            <h1>Weight Lifting Journal</h1>
          </Link>
          <Link to="/sign-up">Sign Up</Link>
          <Link to="/login">Login</Link>
          <Link to="/calendar">Calendar</Link>
        </div>
      </nav>

      <Switch>
        <Route exact path="/sign-up"></Route>
        <Route path="/login"></Route>
        <Route path="/calendar" component={Calendar} />
      </Switch>
    </div>
  );
}

export default App;
