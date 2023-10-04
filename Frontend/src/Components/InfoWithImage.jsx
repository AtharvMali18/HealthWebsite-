import '../Components/InfowithImage.css';
import { useContext, useState } from 'react';
import { UserContext } from './Context';
import axios from 'axios';
import { SmashUploader } from "@smash-sdk/uploader";
import GoToTop from '../Components/GoToTop';
import generatePDF from 'react-to-pdf';
import { useRef } from 'react';


const InfoWithImage = () => {
    const { userName, Authenticated } = useContext(UserContext);
    const [UploadedFile, setUploadedFile] = useState(null);
    const [PDFUAge, setPDFUAge] = useState(0);
    const [PDFUBlood, setPDFUBlood] = useState("");
    const [PDFUHeight, setPDFUHeight] = useState(0);
    const [PDFUWeight, setPDFUWeight] = useState(0);
    const [PDFUBMI, setPDFUBMI] = useState(0);
    const [PDFUhistory, setPDFUhistory] = useState("");
    const [ClickedForState, setClickedForState] = useState(false)
    const [GetAllFiles, setGetAllFiles] = useState(null);

    const target = useRef();

    const HandleFileChange = (e) => {
        setUploadedFile(e.target.files[0])
    }

    const PrintPDf = async () => {
        await generatePDF(target, { filename: 'MediMERN.pdf' });
    }

    const ShowPreview = () => {
        const previewdiv = document.getElementById('PDFDIV');
        previewdiv.style.display = "block";
        setClickedForState(true);
    }

    const UploadFileToBackend = async () => {

        if (Authenticated == true && ClickedForState) {
            PrintPDf();

            const su = new SmashUploader({ region: "eu-central-1", token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZjBjYWY2LTM2NzctNGMwZS04OWQ4LWRiYjBkZDhiNmUyMC1kdSIsInVzZXJuYW1lIjoiNjBhOTQyMTYtZDQ5ZS00NTg3LWEzZGMtM2I4MTJkMjc4ZjA3IiwicmVnaW9uIjoiZXUtY2VudHJhbC0xIiwiaXAiOiIxMDMuMTg3LjgxLjkzIiwic2NvcGUiOiJOb25lIiwiYWNjb3VudCI6IjY5OGU4ZTI0LTE0Y2MtNDFjMC05YmEwLTg3NDI0OGQ5NjdmMC1kYSIsImlhdCI6MTY5NjQxNzcwNSwiZXhwIjo0ODUyMTc3NzA1fQ.J9497kCo-RFOnyJsLCc3HGw9lS3umAbAw_vM_-u6hkY" });

            const files = [UploadedFile];
            console.log(UploadedFile)

            su.upload({
                files,
                title: UploadedFile.name,
                description: 'Uploaded file',
                preview: 'Full'
            }).then(transfer => {
                const PatientDetails = {
                    name: userName,
                    age: PDFUAge,
                    Bloodgroup: PDFUBlood,
                    Height: PDFUHeight,
                    Weight: PDFUWeight,
                    BMI: PDFUBMI,
                    Patienthist: PDFUhistory
                }
                axios.post("http://localhost:5500/HandleFileUploaded", { FileName: UploadedFile.name, FileURL: transfer.transfer.transferUrl, WhoSaved: userName, Patientdetails: PatientDetails }).then((res) => {
                    console.log(res.data);
                    alert("Uploaded Successfully");
                }).catch((err) => {
                    console.log("Error Occured While Storing!!" + err);
                })

            }).catch(error => {
                console.log(error);
            });

        } else {
            alert("You Are not Authenticated Person!! or Hit Preview First");
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
                <div className="info">
                    <h2 className='med'>Medical Information </h2><br />
                    <div>
                        <li>Patient Name:{userName}</li>
                    </div>
                </div>

                <div className="up" style={{ width: "fit-content", marginLeft: "100px" }}>
                    <h2>Fill Medical Details:</h2>
                    <h5>Enter age</h5>
                    <input type='number' style={{ width: "fit-content" }} onChange={(e) => { setPDFUAge(e.target.value) }} placeholder='Age' />
                    <br />
                    <h5>Enter BloodGroup</h5>
                    <input type='Text' style={{ width: "fit-content" }} onChange={(e) => { setPDFUBlood(e.target.value) }} placeholder='BloodGroup' />
                    <br />
                    <h5>Enter Height</h5>
                    <input type='number' style={{ width: "fit-content" }} onChange={(e) => { setPDFUHeight(e.target.value) }} placeholder='Height' />
                    <br />
                    <h5>Enter Weight</h5>
                    <input type='number' style={{ width: "fit-content" }} onChange={(e) => { setPDFUWeight(e.target.value) }} placeholder='Weight' />
                    <br />
                    <h5>Enter BMI</h5>
                    <input type='number' style={{ width: "fit-content" }} onChange={(e) => { setPDFUBMI(e.target.value) }} placeholder='BMI' />
                    <br />
                    <h5>Enter Disease</h5>
                    <input type='text' style={{ width: "fit-content" }} onChange={(e) => { setPDFUhistory(e.target.value) }} placeholder='Disease' />
                    <h5>Upload Certificates</h5>
                    <input type="file" style={{ width: "fit-content" }} onChange={HandleFileChange} />
                    <br />
                    <button className="up1" onClick={UploadFileToBackend}>Upload</button>
                    <br />
                    <br />
                    <button className="up1" onClick={ShowPreview}>Preview</button>

                    {/*Div for Creating PDF on Client Side Application*/}
                    <div ref={target} id='PDFDIV' >
                        <div className="pdf-container">
                            <div className="pdf-header">
                                <h1>HOLA!!{userName}</h1>
                            </div>
                            <div className="pdf-content">
                                <div className="pdf-section">
                                    <p>Name:{userName}</p>
                                    <p>Age:{PDFUAge}</p>
                                    <p>BloodGroup:{PDFUBlood}</p>
                                </div>
                                <div className="pdf-section">
                                    <p>Height:{PDFUHeight}</p>
                                    <p>Weight:{PDFUWeight}</p>
                                    <p>BMI:{PDFUBMI}</p>
                                </div>
                            </div>
                        </div>
                    </div>
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
