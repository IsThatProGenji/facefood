import React, { useEffect, useState, useLayoutEffect } from "react";
import "./Home.css";
import { Image } from "cloudinary-react";
import Axios from "axios";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import CloudUploadOutlinedIcon from "@material-ui/icons/CloudUploadOutlined";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { BottomNavigation } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function Home() {
  const [uploads, setUploads] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("loggedIn")) {
      localStorage.setItem("loggedIn", false);
    }
  }, []);

  const refreshPage = () => {
    window.location.reload();
  };
  const Logout = () => {
    localStorage.setItem("loggedIn", false);
    localStorage.setItem("username", "");
  };
  useEffect(() => {
    Axios.get("https://facefoodqwe.herokuapp.com/upload").then((response) => {
      setUploads(response.data);
    });
  }, []);

  const likePost = (id, key) => {
    var tempLikes = uploads;

    tempLikes[key].likes = tempLikes[key].likes + 1;

    Axios.post("https://facefoodqwe.herokuapp.com/upload/like", {
      author: localStorage.getItem("username"),
      likesid: id,
    }).then((response) => {
      setUploads(tempLikes);
    });
  };
  const history = useHistory();

  function a(id) {
    history.push({
      pathname: "/post/" + id,
      state: { id: id },
    });
  }

  return (
    <div
      className="Background"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <div className="Home" style={{ width: "60%" }}>
        {uploads.map((val, key) => {
          return (
            <div className="Post" style={{ marginBottom: 35, marginRight: 20 }}>
              <div className="Image">
                <Image
                  cloudName="dlhqyhr1r"
                  publicId={val.image}
                  onClick={() => {
                    a(val.id);
                  }}
                />
              </div>
              <div className="Content">
                <div
                  style={{
                    marginTop: 20,
                    marginBottom: 5,
                    width: "90%",
                  }}
                  className="Description"
                >
                  {val.title}
                </div>
              </div>
              <div
                className="Name"
                style={{
                  justifyContent: "space-between",
                }}
              >
                <text style={{ marginBottom: 20 }}>By {val.author}</text>
                <div className="Alike" style={{ marginBottom: 20 }}>
                  <div className="Amount">{val.amount} </div>
                  <div className="Like">
                    <FavoriteBorderIcon
                      id="likeButton"
                      onClick={() => {
                        likePost(val.id, key);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
