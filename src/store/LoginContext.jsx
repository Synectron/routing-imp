import { createContext, useContext, useState } from "react";

//step 1 create a context
const LoginContext = createContext({
  loginToken: "",
  loginEnable: () => {},
});

//step 2 provider

export const UserLoginContext = ({ children }) => {
  const [loginToken, setLoginToken] = useState("Guest");

  const loginEnable = (token) => {
    //gg
    setLoginToken(token); //loginToken: "gg"
  };

  return (
    <LoginContext.Provider value={{ loginToken, loginEnable }}>
      {children}
    </LoginContext.Provider>
  );
};

//export useContext

export const useLoginContext = () => useContext(LoginContext);
