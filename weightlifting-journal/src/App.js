import React,{ useState } from 'react';
import { Route, Link, Switch } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <div className="App">

      <nav>
        <h1>Weight Lifting Journal</h1>
        <div>
          <Link to="/sign-up">Sign Up</Link>
          <Link to="/login">Login</Link>
        </div>
      </nav>

      <Switch>
        <Route exact path="/sign-up">
          
        </Route>
        <Route path="/login">
          
        </Route>
      </Switch>
    </div>
  );
}

export default App;
