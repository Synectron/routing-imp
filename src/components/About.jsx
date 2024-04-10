import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginContext } from "../store/LoginContext";

function About() {
  const navigate = useNavigate();
  const { loginToken } = useLoginContext();

  console.log(loginToken, "token");

  const handleClick = () => {
    navigate("/");
  };
  return (
    <div>
      <h1>About</h1>

      <button onClick={handleClick}>Go to Home Page</button>
    </div>
  );
}

export default About;
