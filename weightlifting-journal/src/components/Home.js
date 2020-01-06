import React from "react";
import { useHistory } from "react-router-dom";


function Home() {
    const { push } = useHistory();

    const routeToHome = () => {
        console.log("Loading...");
        push("/login");
        // history.goBack()
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
      <div>
        <button onClick={routeToSignup}>Signup #2</button>
        <button onClick={routeToLogin}>Login #2</button>
        <p>An Image will go here</p>
        <button onClick={routeToHome}>Login!</button>
      </div>
    );
  }
  
  export default Home;