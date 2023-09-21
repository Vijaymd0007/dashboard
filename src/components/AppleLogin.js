import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./login.css"
import  Apple from"../images/apple.png"

const AppleLoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button className="loginButton" onClick={() => loginWithRedirect()}><img src={Apple}></img>Sign in with Apple</button>;
};

export default AppleLoginButton;