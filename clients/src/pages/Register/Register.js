import React, { useState } from "react";
import "./Register.css";
import Axios from "axios";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const register = () => {
    console.log(username);
    Axios.post("https://facefoodqwe.herokuapp.com/user/register", {
      username: username,
      password: password,
    }).then((response) => {
      console.log(response);
    });
  };
  return (
    <div className="outer">
      <div className="Register" style={{}}>
        <h1 style={{}}>Registration</h1>
        <div
          className="RegisterForm"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <input
            type="text"
            placeholder="Username"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <input
            type="Password"
            placeholder="Password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <a href="/login" style={{ width: 260, marginRight: 10 }}>
            <button onClick={register}>Register</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Register;
