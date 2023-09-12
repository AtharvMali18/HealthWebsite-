import React, { useState } from 'react';
import '../Components/FileUpload.css'; 
// Import your CSS file for styling

const FileUpload = () => {
  return (
    <div className="up">
      <h2>Upload Medical files:</h2>
      <input type="file"  />
      <button className="up1" >
        Upload
      </button>
    </div>
  );
  };

export default FileUpload;
