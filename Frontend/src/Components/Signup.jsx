import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import '../Components/Signup.css';
import axios from 'axios';

const Signup = () => {


  const [UserFirstName, setUserFirstName] = useState("")
  const [UserEmail, setUserEmail] = useState("")
  const [UserPassword, setUserPassword] = useState("")
  const [UserLastName, setUserLastName] = useState("")


  const HandleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      axios.post("http://localhost:5500/handleusers", { Name: UserFirstName, SurName: UserLastName, Passsword: UserPassword, Email: UserEmail }, { withCredentials: true }).then((res) => {
        alert("Registered User Successfully");
        console.log("User data is : " + JSON.stringify(res.data));
      }).catch((err) => {
        alert(`err is occured ${err}`)
      })
    } catch (err) {
      alert(`${err} is Occured!!`)
    }

  }

  const disableBorderReact = () => {
    const f1 = document.getElementById('f11');
    const f2 = document.getElementById('f12');
    const f3 = document.getElementById('f13');
    const f4 = document.getElementById('f14');
    const f5 = document.getElementById('f15')

    f1.style.boxShadow = "none";
    f2.style.boxShadow = "none";
    f3.style.boxShadow = "none";
    f4.style.boxShadow = "none";
    f1.style.background = "none";
    f2.style.background = "none";
    f3.style.background = "none";
    f4.style.background = "none";
    f5.style.boxShadow = "none";
    f5.style.background = "none";
  }

  useEffect(() => {
    disableBorderReact();
  }, []);



  return (
    <>
      <div id="faltu2" className="signup-container">
        <h3>Signup</h3>
        {/* <form > */}

        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", padding: "10px 20px ", width: "400px" }}>

          <label htmlFor="fname" id="f11">First Name</label>
          <input type="text" id="name" onChange={(e) => { setUserFirstName(e.target.value) }} value={UserFirstName} /><br />
        </div>


        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", padding: "2px 10px ", width: "400px" }}>
          <label htmlFor="lname" id="f12">Last Name</label>
          <input type="text" id="name" required onChange={(e) => { setUserLastName(e.target.value) }} value={UserLastName} />
        </div>

        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", padding: "10px 20px ", width: "400px" }}>
          <label htmlFor="email" id='f13' >Email</label>
          <input type="email" id="email" required onChange={(e) => { setUserEmail(e.target.value) }} />
        </div>

        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", padding: "10px 20px ", width: "400px" }}>
          <label htmlFor="Adress" id='f14'>Password</label>
          <input type="password" id="major" required onChange={(e) => { setUserPassword(e.target.value) }} value={UserPassword} />
        </div>

        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", padding: "10px 20px ", width: "400px" }}>
          <label htmlFor="Adress" id='f15'> Confirm Password</label>
          <input type="password" id="major" required />
        </div>

        <button onClick={HandleFormSubmit}>Register</button>


        <div className="button-container">

          <Link to="/login" className="login-link" style={{ fontWeight: "bold" }}>
            Login
          </Link>

        </div>
        {/* </form> */}
      </div>


    </>
  );
}

export default Signup;
