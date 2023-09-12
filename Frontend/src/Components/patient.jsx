import React from "react";
import Patient_navbar from "./patient_navbar";
import InfoWithImage from "./InfoWithImage";
import FileUpload from "./FileUpload";
import Profile from "./profile";

function Patient(){
    return (
         
        <>
        <Patient_navbar />
        <InfoWithImage/>
        <FileUpload/>
        {/* <Profile /> */}
        


        </>
    )

}
export default Patient;