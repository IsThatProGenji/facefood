import React, { useState } from "react";
import "./Upload.css";
import Axios from "axios";
import { useHistory } from "react-router-dom";

function Upload() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState([]);

  let history = useHistory();

  const upload = () => {
    const formData = new FormData();
    formData.append("file", image[0]);
    formData.append("upload_preset", "vgm4xsbh");
    Axios.post(
      "https://api.cloudinary.com/v1_1/dlhqyhr1r/image/upload",
      formData
    ).then((response) => {
      const fileName = response.data.public_id;

      Axios.post("https://facefoodqwe.herokuapp.com/upload", {
        title: title,
        description: description,
        image: fileName,
        author: localStorage.getItem("username"),
      }).then(() => {
        history.push("/");
      });
    });
  };

  return (
    <div className="box">
      <div className="Upload" style={{ marginRight: 200 }}>
        <h1 style={{ marginRight: 50 }}>Create A Post</h1>

        <div className="UploadForm">
          <input
            type="text"
            placeholder="Title"
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
          <textarea
            rows={10}
            cols={1}
            style={{ whiteSpace: "pre-wrap" }}
            type="textarea"
            placeholder="Description \n"
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
          <text style={{ whiteSpace: "pre-wrap" }}></text>
          <input type="file" onChange={(e) => setImage(e.target.files)} />
          <button onClick={upload}>Upload</button>
        </div>
      </div>
    </div>
  );
}

export default Upload;
