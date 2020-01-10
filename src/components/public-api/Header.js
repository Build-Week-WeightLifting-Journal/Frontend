import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import CharacterList from "./CharacterList";

export default function Header() {
  return (
  
    <Router>
      <header className="ui centered">
        <h1 className="ui center">User Info:</h1>
      </header>

      <div>

              <Link to="/characters">users' information</Link>
     
        <Switch>
          <Route exact path="/characters" component={CharacterList} />
        </Switch>
      </div>
    </Router>
  );
}
