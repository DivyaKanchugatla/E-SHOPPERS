import React from "react";
import "./Login.css";


const Login = (props) => {
  const closeModal=()=>{
    props.modalClose(false)
  }
  return (
    <div className="container containermain">
      <div className="row">
        <div className="cardContainer">
          <div className="exitSection">
            <button onClick={closeModal} className="exitbutton">X</button>
          </div>
          <div>
            <h2 className="titleHeading">Login</h2>
          </div>
          <div className="userLoginContainer">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control"
            />
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="form-control"
            />
          </div>
          <div className="buttonSection">
            <button className="btn btn-success">Login</button>
            <button className="btn btn-primary">Signup</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;