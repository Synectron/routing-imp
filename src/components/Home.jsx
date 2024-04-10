import React, { useState } from "react";
import { useNavigate, useLoaderData } from "react-router-dom";
import { useLoginContext } from "../store/LoginContext";

function Home() {
  const navigate = useNavigate();
  //const data = useLoaderData();
  const { loginEnable } = useLoginContext();
  const [name, setName] = useState();
  const { loginToken } = useLoginContext(); //"Guest" "gg"
  //  const {loginEnable} = useContext(LoginContext)

  const handleClick = () => {
    loginEnable(name); //gg
    //navigate("/about");
  };

  return (
    <div>
      <h1>Name is: {loginToken}</h1>
      <form>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <button>Sign up</button>
        <button onClick={handleClick}>Log in</button>
      </form>
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
