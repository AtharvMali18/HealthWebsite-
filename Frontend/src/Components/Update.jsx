import '../CSS/Update.css';
import { useState, useContext } from 'react';
import axios from 'axios';
import { UserContext } from './Context';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { SmashUploader } from "@smash-sdk/uploader";


const Update = () => {

    const [Age, setAge] = useState(0);
    const [BloodGroup, setBloodGroup] = useState("");
    const [Height, setHeight] = useState(0);
    const [Weight, setWeight] = useState(0);
    const [Image, setImage] = useState("");
    const [BMI, setBMI] = useState(0);
    const { userName } = useContext(UserContext);
    const [FillProfile, setFillProfile] = useState(false);


    const HandleImageUpload = (e) => {
        const SelectedImage = e.target.files[0];
        const generatedImage=URL.createObjectURL(SelectedImage);

        setImage(generatedImage);

        // const su = new SmashUploader({ region: "eu-central-1", token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjFkNzViNzdjLTYyN2QtNDU0ZC04MWRlLTRmMmNmMmRiYWMyMS1kdSIsInVzZXJuYW1lIjoiZjNhNjc4N2ItODlhYi00YWQ5LTkwYTYtYjY5ZTkxYTJmMmJhIiwicmVnaW9uIjoiZXUtY2VudHJhbC0xIiwiaXAiOiI0OS4zNi4zMy4xNjYiLCJzY29wZSI6Ik5vbmUiLCJhY2NvdW50IjoiNGFkZmVhZjQtOGRlMS00NTQ3LTkwYWEtZjM1MzUwYTQyOWU0LWRhIiwiaWF0IjoxNjk4OTM0OTEwLCJleHAiOjQ4NTQ2OTQ5MTB9.b2ncKAH-tkQ4YtO08FwivrB1h0vFYLY9u68f9ES7Shc" });

        // const files = [SelectedImage];

        // su.upload({
        //     files,
        //     title: SelectedImage.name,
        //     description: 'Uploaded file',
        //     preview: 'Full'
        // }).then(transfer => {
        //    setImage(transfer.transfer.transferUrl)
        // }).catch((err) => {
        //     alert(`${err} is Occured`);
        //     console.log(err);
        // })
    }

    const fillprofile = async (e) => {
        e.preventDefault();

        const PatientDetails = {
            Name: userName,
            Agep: Age,
            Bloodp: BloodGroup,
            Heightp: Height,
            Weightp: Weight,
            BMIP: BMI,
            ImageP: Image
        }

        try {
            axios.post("http://localhost:5500/setprofile", { PatientDetailsU: PatientDetails }, { withCredentials: true }).then((res) => {
                toast.success(res.data, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                setFillProfile(true);
            }).catch((err) => {
                console.log(err);
            })


        } catch (err) {
            console.log(err);
        }

    }

    return (
        <>

            {!FillProfile ? <> <div style={{ display: 'block', margin: 'auto', width: 'fit-content', marginLeft: "500px" }}>
                <div className="containerup" >
                    <div className="form_areaup">
                        <p className="titleup">Fill Profile</p>
                        <form action="">

                            <div style={{ display: "flex", flexDirection: "row" }}>


                                <div>
                                    <div className="form_groupup">
                                        <label className="sub_titleup" htmlFor="name">Age</label>
                                        <input placeholder="Enter Age" className="form_styleup" type="number" onChange={((e) => { setAge(e.target.value) })} value={Age} />
                                    </div>
                                    <div className="form_groupup">
                                        <label className="sub_titleup" htmlFor="email">BloodGroup</label>
                                        <input placeholder="Enter your BloodGroup" id="email" className="form_styleup" type="text" onChange={((e) => { setBloodGroup(e.target.value) })} value={BloodGroup} />
                                    </div>

                                    <div className="form_groupup">
                                        <label className="sub_titleup" htmlFor="password">Height</label>
                                        <input placeholder="Enter your Height" id="password" className="form_styleup" type="number" onChange={((e) => { setHeight(e.target.value) })} value={Height} />
                                    </div>

                                </div>


                                <div>

                                    <div className="form_groupup">
                                        <label className="sub_titleup" htmlFor="password">Weight</label>
                                        <input placeholder="Enter your weight" id="password" className="form_styleup" type="number" onChange={((e) => {
                                            setWeight(e.target.value)
                                        })} value={Weight} />
                                    </div>

                                    <div className="form_groupup">
                                        <label className="sub_titleup" htmlFor="password">BMI</label>
                                        <input placeholder="Enter your BMI" id="password" className="form_styleup" type="number" onChange={((e) => {
                                            setBMI(e.target.value)
                                        })} value={BMI} />
                                    </div>

                                    <div className="form_groupup">
                                        <label className="sub_titleup" htmlFor="password">Image</label>
                                        <input className="form_styleup" accept='image/*' type="file" onChange={HandleImageUpload} />
                                    </div>


                                </div>

                            </div>



                            <div>
                                <button className="btnup" onClick={fillprofile}>Fill</button>
                            </div></form></div></div>
            </div>

            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />   </>:<> <div style={{ display: 'block', margin: 'auto', width: 'fit-content', marginLeft: "600px" , marginTop:'50px'}}><h2>---Profile Completed---</h2></div></>}

        </>
    )
}

export default Update