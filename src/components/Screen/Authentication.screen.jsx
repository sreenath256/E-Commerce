import React, { useState } from "react";
import "./authentification.css";
import SignInForm from "../SignIn.component";
import SignUpForm from "../SignUp.component";

const Authentication =() =>{
  const [type, setType] = useState("signIn");
  const handleOnClick = text => {
    if (text !== type) {
      setType(text);
      return;
    }
  };

 
  const containerClass =
    "container " + (type === "signUp" ? "right-panel-active" : "");
  return (
    <div className=" flex justify-center" style={{width:'550px'}}>

    <div className="Appmain h-screen flex justify-center flex-col items-center ">
      <h2>Sign in/up Form</h2>
      <div className={containerClass} id="container">
        <SignUpForm />
        <SignInForm />
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button
                className="ghost"
                id="signIn"
                onClick={() => handleOnClick("signIn")}
                >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button
                className="ghost "
                id="signUp"
                onClick={() => handleOnClick("signUp")}
                >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
                </div>
  );
}

export default Authentication