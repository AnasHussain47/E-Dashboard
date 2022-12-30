import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    //setting email in state
  const [email, setEmail] = React.useState("");
  //setting password in state
  const [password, setPassword] = React.useState("");
//make naviagate variable with use Navigate route method whish is uswe for naviagte to any page 
  const naviagte = useNavigate();



//to prevent if user is logged in it can't goto login page with hard url 
  useEffect(() => {
      //set user credential in auth variable by localstorage
    const auth = localStorage.getItem("user");
    if (auth) {
        //if user has credenial in localstorage the it will refirect to Home page instead of any url 
        naviagte("/");
    }
  }, []);

  
  //calling login api with button click event
  const handleLogin = async () => {
      //using fetch method calling api
    let result = await fetch("http://localhost:5000/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    if (result.auth) {
      localStorage.setItem("user", JSON.stringify(result.user));
      localStorage.setItem("token", JSON.stringify(result.auth));

      naviagte("/");
    } else {
      alert("Enter Valid credentials");
    }
  };
  return (
    <>
      <div className="register">
        <h1 className="RegisterHeading">Login</h1>
        <input
          type="text"
          className="inputBox"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          className="inputBox"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button onClick={handleLogin} className="appButton" type="button">
          Login
        </button>
      </div>
    </>
  );
};

export default Login;
