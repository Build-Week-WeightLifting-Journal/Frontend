import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import { ProtectedRoute } from "./components/protected.route";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import "./App.css"

function App() {
  return (
    <div className="App">
      <nav>
        <div>
          <Link to="/">
            <h1>Weight Lifting Journal</h1>
          </Link>
        </div>
      </nav>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/sign-up">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <ProtectedRoute exact path="/dashboard" component={Dashboard} />
        
        <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
    </div>
  );
}

export default App;
