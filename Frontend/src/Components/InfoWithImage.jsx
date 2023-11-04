import '../CSS/InfoWithImage.css'
import { UserContext } from './Context';
import { useContext, useState } from 'react';
import Update from './Update';
import { SmashUploader } from "@smash-sdk/uploader";
import axios from 'axios';


const InfoWithImage = () => {

    const [Age, setAge] = useState(0);
    const [BloodGroup, setBloodGroup] = useState("");
    const [Height, setHeight] = useState(0);
    const [Weight, setWeight] = useState(0);
    const [Image, setImage] = useState("");
    const [BMI, setBMI] = useState(0);
    const [UploadedFile, setUploadedFile] = useState(null);
    const [Certificates, setCertificates] = useState([]);

    const { userName } = useContext(UserContext);

    const HandleFileChange = (e) => {
        setUploadedFile(e.target.files[0]);
    }

    setInterval(() => {
        axios.post("http://localhost:5500/getAllCertificates", { userName: userName }, { withCredentials: true }).then((res) => {
            setCertificates(res.data);
        }).catch((err) => {
            console.log(`${err} is Occuerd`)
        })
    }, 2000);

    setInterval(() => {
        axios.post("http://localhost:5500/getProfile", { Name: userName }, { withCredentials: true }).then((res) => {
            setAge(res.data.Agep);
            setBloodGroup(res.data.Bloodp);
            setHeight(res.data.Heightp);
            setWeight(res.data.Weightp);
            setBMI(res.data.BMIP);
            setImage(res.data.ImageP);
        }).catch((err) => {
            console.log(`${err} Fetching data Occured!!`);
        })
    }, 10000);


    const UploadToBackend = async (e) => {
        e.preventDefault();

        const su = new SmashUploader({ region: "eu-central-1", token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjFkNzViNzdjLTYyN2QtNDU0ZC04MWRlLTRmMmNmMmRiYWMyMS1kdSIsInVzZXJuYW1lIjoiZjNhNjc4N2ItODlhYi00YWQ5LTkwYTYtYjY5ZTkxYTJmMmJhIiwicmVnaW9uIjoiZXUtY2VudHJhbC0xIiwiaXAiOiI0OS4zNi4zMy4xNjYiLCJzY29wZSI6Ik5vbmUiLCJhY2NvdW50IjoiNGFkZmVhZjQtOGRlMS00NTQ3LTkwYWEtZjM1MzUwYTQyOWU0LWRhIiwiaWF0IjoxNjk4OTM0OTEwLCJleHAiOjQ4NTQ2OTQ5MTB9.b2ncKAH-tkQ4YtO08FwivrB1h0vFYLY9u68f9ES7Shc" });

        console.log(su);

        const files = [UploadedFile];

        su.upload({
            files,
            title: UploadedFile.name,
            description: 'Uploaded file',
            preview: 'Full'
        }).then(transfer => {
            axios.post("http://localhost:5500/HandleFileUploaded", { WhoSaved: userName, FileName: UploadedFile.name, FileURL: transfer.transfer.transferUrl }, { withCredentials: true }).then((res) => {
                console.log("File Uploaded Successfully" + res.data);
            }).catch((err) => {
                alert(`${err} is Occured`);
                console.log(err);
            })
        }).catch((err) => {
            alert(`${err} is Occured`);
            console.log(err);
        })

    }


    return (
        <>
            <div className="navbar-top">
                <div className="title">
                    <h1>Profile</h1>
                </div>
            </div>

            <div className="sidenav">
                <div className="profile">
                    <img src={Image} alt="" width="100" height="100" />

                    <div className="name">
                        {userName}
                    </div>
                </div>

            </div>


            <div className="main">
                <h2>IDENTITY</h2>
                <div className="card">
                    <div className="card-body">
                        <i className="fa fa-pen fa-xs edit"></i>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Name</td>
                                    <td>:</td>
                                    <td>{userName}</td>
                                </tr>
                                <tr>
                                    <td>Age</td>
                                    <td>:</td>
                                    <td>{Age}</td>
                                </tr>
                                <tr>
                                    <td>Height</td>
                                    <td>:</td>
                                    <td>{Height}</td>
                                </tr>
                                <tr>
                                    <td>BloodGroup</td>
                                    <td>:</td>
                                    <td>{BloodGroup}</td>
                                </tr>
                                <tr>
                                    <td>Weight
                                    </td>
                                    <td>:</td>
                                    <td>{Weight}</td>
                                </tr>
                                <tr>
                                    <td>BMI</td>
                                    <td>:</td>
                                    <td>{BMI}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <h1 style={{ marginTop: "40px" }}>Certifictes</h1>
                {Certificates ? <>{Certificates.map((val) => {
                    return (<>

                        <p>Name of Certifcate :{val.fileName}</p>
                        <p>Url of Certifcate :{val.fileURL}</p>

                    </>)
                })}</> : <>NO Certificates Uptill Now</>}


                <input type="file" style={{ width: "fit-content" }} onChange={HandleFileChange} />

                <button onClick={UploadToBackend}>Upload Certificates</button>


            </div>

            <Update />

        </>
    )
}

export default InfoWithImage