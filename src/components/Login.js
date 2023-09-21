import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./login.css"
import  google from"../images/google.png"

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button className="loginButton" onClick={() => loginWithRedirect()}><img src={google}></img>Sign in with Google</button>;
};

export default LoginButton;