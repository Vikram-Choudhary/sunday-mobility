import React, { useState } from "react";
import InputField from "../Generic/inputField";
import { useHistory } from "react-router-dom";

export default function AppLogin(props) {
  const [message, setMessage] = useState("");
  const messageCall = () => {
    setMessage("Invalid Input.");
  };
  let history = useHistory();
  let inputObj = { email: "", password: "" };
  const handleSubmit = (e) => {
    e.preventDefault();
    let retrievedArray = JSON.parse(localStorage.getItem('inputObj')) ?
      JSON.parse(localStorage.getItem('inputObj'))
      : [];
    let userObject = retrievedArray.some(obj => obj.email === inputObj.email && obj.password === inputObj.password);
    userObject ? history.push("/home") : messageCall();
  };
  return (
    <div className="col-sm -12 col-md-4 p-0">
      <div className="card">
        <h2 className="card-title text-center">Welcome back!</h2>
        <span className="card-title text-center">Please login to your account.</span>
        <div className="card-body">
          <form name="usertLoginForm" onSubmit={handleSubmit}>
            <div className="form-group">
              <InputField
                required
                regxPattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"
                type="email"
                title="Email: example@example.com"
                className="form-control"
                id="email"
                placeholder="Email Address"
                getValue={(value) => {
                  inputObj.email = value;
                }}
              />
            </div>
            <div className="form-group">
              <InputField
                required
                type="password"
                title="Password: case-sensitive"
                className="form-control"
                id="password"
                placeholder="Password"
                getValue={(value) => {
                  inputObj.password = value;
                }}
              />
            </div>
            <button type="button" className="mt-1 btn btn-link button " onClick={() => { }}>Forgot Password</button>
            <div className="message">{message}</div>
            <button className="btn btn-primary button">Login</button>
          </form>
          <form action="https://www.facebook.com/">
            <button type="submit" className="mt-1 btn fb button" >Login with Facebook</button>
          </form>
          <button type="button" className="mt-1 btn btn-link button" onClick={() => {
            history.push("/register");
          }}>Register new user</button>
        </div>
      </div>
    </div >
  );
}
