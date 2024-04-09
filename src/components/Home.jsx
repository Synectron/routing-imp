import React from "react";
import { useNavigate, useLoaderData } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const data = useLoaderData();
  console.log(data, "data");

  const handleClick = () => {
    navigate("/about");
  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleClick}>Go to About Page</button>
    </div>
  );
}

export default Home;

//arch
//component building
//props
//props pass
//hooks --> useState, useEffect,useRef,useMemo,useCallBack,React.Memo
//routing
//pending
//context
//form
