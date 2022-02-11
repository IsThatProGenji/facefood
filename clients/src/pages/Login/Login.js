import React, { useState } from "react";
import "./Login.css";
import Axios from "axios";

import { useHistory } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const refreshPage = () => {
    window.location.reload();
  };

  let history = useHistory();

  const Login = () => {
    Axios.post("https://facefoodqwe.herokuapp.com/user/login", {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.loggedIn) {
        localStorage.setItem("loggedIn", true);
        localStorage.setItem("username", response.data.username);
        history.push("/");
        refreshPage();
      } else {
        setErrorMessage(response.data.message);
      }
    });
  };
  return (
    <div className="outer">
      <div className="Login">
        <h1 style={{}}>Login</h1>
        <div
          className="LoginForm"
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
          <button style={{ width: 260 }} onClick={Login}>
            {" "}
            Login
          </button>
          <div className="message" style={{}}>
            <h1 style={{ fontSize: 20, color: "red" }}>{errorMessage}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
