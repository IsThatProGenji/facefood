import React, { useEffect, useState, useLayoutEffect } from "react";
import "./Navbar.css";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import CloudUploadOutlinedIcon from "@material-ui/icons/CloudUploadOutlined";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
function Navbar() {
  const { width } = useWindowSize();
  const [loggedIn, setLoggedIn] = useState();

  useEffect(() => {
    setLoggedIn(localStorage.getItem("loggedIn"));
  }, [localStorage.getItem("loggedIn")]);

  const refreshPage = () => {
    window.location.reload();
  };
  const Logout = () => {
    localStorage.setItem("loggedIn", false);
    localStorage.setItem("username", "");
  };
  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }, []);
    return size;
  }
  function ShowWindowDimensions(props) {
    const [width, height] = useWindowSize();

    return (
      <div style={{ flexdirection: "row" }}>
        <div className="Background" style={{ flexDirection: "row" }}>
          <div className="Navbar" style={{ width: "100%" }}>
            <div className="Profile">
              <a href="/">
                <div className="Homeimg" style={{ marginRight: 5 }}>
                  <HomeRoundedIcon />
                </div>
                Home{" "}
              </a>
            </div>
            <div className="Profile">
              {" "}
              <a href="/upload">
                <div className="Uploadimg" style={{ marginRight: 5 }}>
                  <CloudUploadOutlinedIcon />
                </div>
                Upload
              </a>
            </div>
            <div className="Profile">
              {" "}
              <a href="/profile">
                <div className="Profileimg" style={{ marginRight: 5 }}>
                  <PersonRoundedIcon />
                </div>
                Profile
              </a>
            </div>
            <div
              className="Profile"
              style={{ width: "70%", justifyContent: "flex-end" }}
            >
              <div className="Logout">
                <a href="/">
                  <button
                    onClick={() => {
                      Logout();
                      refreshPage();
                    }}
                  >
                    <div className="Logout" style={{ marginLeft: 5 }}>
                      <ExitToAppIcon />
                    </div>
                    <text style={{ marginLeft: "7%" }}>Logout</text>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (localStorage.getItem("username", "")) {
    return <div>{ShowWindowDimensions()}</div>;
  }
  return (
    <div className="Navbar">
      <div className="Profile">
        <a href="/">
          <div className="Homeimg" style={{ marginRight: 5 }}>
            <HomeRoundedIcon />
          </div>
          Home{" "}
        </a>
      </div>
      <div className="Profile">
        {" "}
        <a href="/login">
          <div className="LoginIcon" style={{ marginRight: 5 }}></div>
          Login
        </a>
      </div>
      <a href="/register">Register</a>
    </div>
  );
}

export default Navbar;
