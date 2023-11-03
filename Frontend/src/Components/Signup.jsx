import { useState } from "react";
import { Link } from 'react-router-dom';
import '../CSS/Signup.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {

  const [UserFirstName, setUserFirstName] = useState("")
  const [UserEmail, setUserEmail] = useState("")
  const [UserPassword, setUserPassword] = useState("")
  const [UserLastName, setUserLastName] = useState("")

  const RegisterUser = async (e) => {
    e.preventDefault();

    try {

      axios.post("http://localhost:5500/handleusers", { Name: UserFirstName, SurName: UserLastName, Passsword: UserPassword, Email: UserEmail }, { withCredentials: true }).then((res) => {
        toast.success('😊 Registration Successful', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        console.log("User data is : " + JSON.stringify(res.data));
      }).catch((err) => {
        toast.error(`${err} ☠️ Error is Occured`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      })

    } catch (err) {
      alert(`${err} !! ERROR Occured !!`)
    }

  }

  return (
    <>
      <div className="Div-c1">
        <form className="form1">
          <span id="login-lable1">Signup</span>

          <input className="input1" type="text" placeholder="FirstName" onChange={(e) => { setUserFirstName(e.target.value) }} value={UserFirstName} required />

          <input className="input1" type="text" placeholder="LastName" onChange={(e) => { setUserLastName(e.target.value) }} value={UserLastName} required />

          <input className="input1" type="email" placeholder="Email" onChange={(e) => {
            setUserEmail(e.target.value)
          }} value={UserEmail} required pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" />

          <input className="input1" type="password" placeholder="PassWord" onChange={(e) => { setUserPassword(e.target.value) }} value={UserPassword} required />

          <button id="btn1" onClick={RegisterUser}>Submit</button>

          <Link to="/login" style={{ textDecoration: "none" }}><p style={{ color: "whitesmoke", marginTop: "20px", fontWeight: "bold", fontSize: '20px' }}>Already Had Account??</p></Link>

        </form>
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
        />
      </div>

    </>
  );
}

export default Signup;
