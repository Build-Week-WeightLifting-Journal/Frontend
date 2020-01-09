import React from "react";
import { useHistory, Switch, Link, Route } from "react-router-dom";
import { MainContent, NavDiv, LoginSignup } from "./Styles.js";
import Header from "./public-api/Header";
import CharacterList from "./public-api/CharacterList";


function Home() {
    const { push } = useHistory();

    const routeToHome = () => {
        console.log("Loading...");
        push("/login");
    };

    const routeToSignup = () => {
        console.log("Loading...");
        push("/sign-up");
    };
    const routeToLogin = () => {
        console.log("Loading...");
        push("/login");
    };
 
    return (
      <>
        <NavDiv>
          <LoginSignup onClick={routeToSignup}>Sign Up</LoginSignup>
          <LoginSignup onClick={routeToLogin}>Login</LoginSignup>
          
        </NavDiv>
        <Link to="/characters">Characters</Link>
        <MainContent>
          <p>An Image will go here</p>
          <button className="button" onClick={routeToHome}>Login!</button>
          <Switch>
          <Route exact path="/characters" component={CharacterList} />
        </Switch>
        </MainContent>
      </>
    );
  }
  
  export default Home;