import React from "react";
import { useHistory } from "react-router-dom";

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
      <div className="Home">
        <button onClick={routeToSignup}>Sign Up</button>
        <button onClick={routeToLogin}>Login</button>
        <p>An Image will go here</p>
        <button onClick={routeToHome}>Login!</button>
      </div>
    );
  }
  
  export default Home;