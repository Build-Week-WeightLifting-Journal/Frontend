import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const WrapperDiv = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 40px;
  margin: 10px;
  width: auto;
  background-color: #03DAC5;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

`;

const WrapperSec = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [data, setData] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://weightlifting-journal15.herokuapp.com/api/user`,
      )
      .then(response => {
        console.log("original", response.data)
        setData(response.data);
      });
  }, []);

  return (
    <WrapperSec>
        {data.map(userInfo => {
          return (
            <WrapperDiv
              key= {userInfo.id}
            >
              <h4>
                username: {userInfo.username}
              </h4>
              <p>password: {userInfo.password}</p>
              <p>
                email: {userInfo.email}
              </p>
            </WrapperDiv>
          );
        })}
    </WrapperSec>
  );
}
