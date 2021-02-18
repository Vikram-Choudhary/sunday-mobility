import React from "react";
import InputField from "../Generic/inputField";
import { useHistory } from "react-router-dom";

export default function Register(props) {
  let history = useHistory();
  let inputObj = { name: "", email: "", password: "", mobile: "" };
  const handleSubmit = (e) => {
    e.preventDefault();
    let retrievedArray = JSON.parse(localStorage.getItem('inputObj')) ?
      JSON.parse(localStorage.getItem('inputObj'))
      : [];
    let isEmailPresent = retrievedArray.some(obj => obj.email === inputObj.email);
    if (isEmailPresent) {
      alert("User Already Exist !")
    }
    else {
      retrievedArray.push(inputObj);
      localStorage.setItem('inputObj', JSON.stringify(retrievedArray));
      history.push("/");
    }
  };
  return (
    <div className="col-sm -12 col-md-4 p-0">
      <div className="card">
        <h2 className="card-title text-center">Register here!</h2>
        <div className="card-body">
          <form name="userRegistrationForm" onSubmit={handleSubmit}>
            <div className="form-group">
              <InputField
                required
                regxPattern="[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$"
                type="text"
                title="Name: Alphanumeric, min=5 max=50 characters"
                className="form-control"
                minLength={5}
                maxLength={50}
                id="name"
                placeholder="Name"
                getValue={(value) => {
                  inputObj.name = value;
                }}
              />
            </div>
            <div className="form-group">
              <InputField
                required
                regxPattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                type="tel"
                title="Mobile Number: XXX-XXX-XXXX"
                className="form-control"
                maxLength={13}
                id="mobile"
                placeholder="Mobile Number"
                getValue={(value) => {
                  inputObj.mobile = value;
                }}
              />
            </div>
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
                title="Password:&nbsp;Alphanumeric&#010;1)&nbsp;Must contain at least one number&#010;2)&nbsp;Must contain at least one special character&#010;3)&nbsp;Minimum of 8 and Maximum of 50 characters"
                className="form-control"
                id="password"
                placeholder="Password"
                regxPattern="(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,50}"
                getValue={(value) => {
                  inputObj.password = value;
                }}
              />
            </div>
              <button className="btn btn-primary button">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}
