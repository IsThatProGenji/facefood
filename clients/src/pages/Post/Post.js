import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Image } from "cloudinary-react";
import { TransverseLoading } from "react-loadingg";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./Post.css";

function Post() {
  const [yourUploads, setYourUploads] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const id = history.location.state.id;
  useEffect(() => {
    setIsLoading(true);
    Axios.get(`https://facefoodqwe.herokuapp.com/upload/post/${id}}`)
      .then((response) => {
        setYourUploads(response.data);
      })
      .catch((err) => {
        console.error(err);
      })
      .then(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        backgroundColor: "black",
        height: "100%",
        paddingBottom: 510,
      }}
    >
      <div style={{ backgroundColor: "black", width: "45%" }}>
        <div style={{}}>
          {!isLoading && Object.entries(yourUploads).length ? (
            <>
              {yourUploads.map((val, key) => {
                return (
                  <div style={{}}>
                    <div
                      style={{
                        width: "100%",
                        paddingBottom: 15,
                        flexDirection: "row",
                        display: "flex",
                      }}
                    >
                      <Image
                        cloudName="dlhqyhr1r"
                        publicId={val.image}
                        style={{ width: "350px" }}
                      />
                      <div
                        style={{
                          flexDirection: "column",
                          width: "70%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <div
                          className="title"
                          style={{
                            whiteSpace: "pre-wrap",
                          }}
                        >
                          {val.title}{" "}
                        </div>
                        <div
                          className="Author"
                          style={{ whiteSpace: "pre-wrap", color: "white" }}
                        >
                          by {val.author}{" "}
                        </div>
                      </div>
                    </div>
                    <div
                      className="desc"
                      style={{ whiteSpace: "pre-wrap", color: "white" }}
                    >
                      {val.description}
                    </div>
                  </div>
                );
              })}
            </>
          ) : (
            <div className="Postp1">
              <TransverseLoading
                className="spinner"
                type="spin"
                color="black"
                height="50%"
                width="50%"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Post;
