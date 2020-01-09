import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import { PrivateRoute } from "./components/private.route";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import "./App.css"
import WorkoutList from "./components/dashboard/workout-list/WorkoutList";
import Header from "./components/public-api/Header";
import ExerciseList from "./components/dashboard/workout-list/exercise-list/ExerciseList";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash, faCheck, faEdit } from '@fortawesome/free-solid-svg-icons';
library.add(faTrash, faCheck, faEdit);

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
    
        <Route>
          <ExerciseList />
        </Route>
        <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>

      <main>
          <Header />
        </main>
    </div>
  );
}

export default App;
