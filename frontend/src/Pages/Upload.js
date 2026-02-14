import React, { useState } from "react";
import API from "../api";

function Upload() {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);

    const token = localStorage.getItem("token");

    const res = await API.post("/upload", formData, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    alert("Uploaded: " + res.data.fileUrl);
  };

  return (
    <div>
      <h2>Upload Project</h2>
      <input type="file" onChange={(e) => setFile(e.target.files[0])}/>
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default Upload;
