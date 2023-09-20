import '../Components/InfowithImage.css';
import { useContext, useState } from 'react';
import { UserContext } from './Context';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { SmashUploader } from "@smash-sdk/uploader";
import GoToTop from '../Components/GoToTop'

const InfoWithImage = () => {
    const { userName, Authenticated } = useContext(UserContext);
    const [UploadedFile, setUploadedFile] = useState(null);
    const [GetAllFiles, setGetAllFiles] = useState(null);
    const Navigator = useNavigate();

    const HandleFileChange = (e) => {
        setUploadedFile(e.target.files[0]);
    }

    const UploadFileToBackend = async () => {

        if (Authenticated == true) {
            const su = new SmashUploader({ region: "eu-central-1", token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMzFkNTMwLTBjYTgtNGJiNS04OGIwLWYwZWM4NjM4NDU2MC1kdSIsInVzZXJuYW1lIjoiZGQ0ZGM4YWItZDZkMC00MzQ0LThlNzAtY2U2ZjU3ZWY0N2E2IiwicmVnaW9uIjoiZXUtY2VudHJhbC0xIiwiaXAiOiIxMDMuMTg3LjgxLjk4Iiwic2NvcGUiOiJOb25lIiwiYWNjb3VudCI6IjQ2ZWYzNjZiLWUwZWItNDZmNy1hNTU3LTYwMTY1NmIyMmIyMC1kYSIsImlhdCI6MTY5NTE4NzAxNiwiZXhwIjo0ODUwOTQ3MDE2fQ.AZ2cCxTyDGkiWJWpp_xoRlRuWFKF-kVqx213mlLt_Ko" });

            const files = [UploadedFile];

            console.log(UploadedFile)

            su.upload({
                files,
                title: UploadedFile.name,
                description: 'Uploaded file',
                preview: 'Full'
            }).then(transfer => {
                axios.post("http://localhost:5500/HandleFileUploaded", { FileName: UploadedFile.name, FileURL: transfer.transfer.transferUrl, WhoSaved: userName }).then((res) => {
                    console.log(res.data);
                    alert("Uploaded Successfully")
                }).catch((err) => {
                    console.log("Error Occured While Storing!!" + err);
                })

            }).catch(error => {
                console.log(error);
            });

        } else {
            alert("You Are not Authenticated Person!!");
            Navigator("/")
        }


    }

    const getAllCertificates = async () => {
        axios.post("http://localhost:5500/getAllCertificates", { userName: userName }).then((res) => {
            setGetAllFiles(res.data);
        }).catch((err) => {
            console.log(`${err} is Occured`);
        })
    }

    getAllCertificates();

    return (

        <>
            <div className="info-container">
                <div className="image-container">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
                        alt="Sample"
                        className="round-image"
                    />
                </div>

                <div className="info">
                    <h2 className='med'>Medical Information </h2><br />
                    <div>
                        <li>Patient Name:{userName}</li>
                    </div>
                </div>

                <div className="up" style={{ width: "fit-content", marginLeft: "100px" }}>
                    <h2>Upload Medical files:</h2>
                    <input type="file" onChange={HandleFileChange} />
                    <button className="up1" onClick={UploadFileToBackend}>Upload</button>
                </div>

            </div>

            <div style={{ width: "fit-content", display: "block", margin: "auto" }}>
                <br />
                <br />
                <h1>Your All Certificates</h1>
                <hr />
                <br />
                <br />
                <div id='zanduBaam'>{GetAllFiles && GetAllFiles.map((val) => {
                    return (<>

                        <div className='cardop'>
                            <div className="card-infoop">
                                <h3>{val.Firstname}</h3>
                                <h6>{val.fileName}</h6>
                                <a href={val.fileURL} style={{ textDecoration: "none" }}><p>FileURL</p></a>
                            </div>
                        </div>
                    </>)
                })}</div>
            </div>


            <GoToTop />

        </>
    );
};

export default InfoWithImage;
