import React from "react";
import { useHistory } from "react-router-dom";
import { MainContent, NavDiv, LoginSignup } from "./Styles.js";

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
        
        <MainContent>
          <p>An Image will go here</p>
          <button className="button" onClick={routeToHome}>Login!</button>
        </MainContent>
      </>
    );
  }
  
  export default Home;