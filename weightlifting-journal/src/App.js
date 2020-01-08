import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import { PrivateRoute } from "./components/private.route";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import "./App.css"
import WorkoutList from "./components/dashboard/workout-list/WorkoutList";

function App() {
  return (
    <div className="App">
      <nav>
          <Link className="Journal-title" to="/">
            <h1>Weight Lifting Journal</h1>
          </Link>
      </nav>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route className="SignUpBtn" path="/sign-up">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute exact path="/dashboard" component={Dashboard} />

        <Route>
          <WorkoutList />
        </Route>
        <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
    </div>
  );
}

export default App;
