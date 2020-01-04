import React from "react";
import { useHistory } from "react-router-dom";

function Home() {
    const { push } = useHistory();

    const routeToHome = () => {
        console.log("Loading...");
        setTimeout(() => {
            push("/");
        });
        // history.goBack()
    };

    return (
      <div>
        <p>An Image will go here</p>
        <button onClick={routeToHome}>Login!</button>
      </div>
    );
  }
  
  export default Home;