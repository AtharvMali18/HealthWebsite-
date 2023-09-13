import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Components/Login.css';
import { useState } from 'react';
import axios from 'axios';
import fs from 'fs';


const Login = () => {

    const [UserEmail, setUserEmail] = useState(" ")
    const [UserPassword, setUserPassword] = useState(" ")


    const disableBorder = () => {

        const f3 = document.getElementById('f3')
        const f4 = document.getElementById('f4')
        f3.style.boxShadow = "none";
        f4.style.boxShadow = "none";
        f3.style.background = "none";
        f4.style.background = "none";

    }


    useEffect(() => {
        disableBorder();
    }, [])

    const SendUserLogin = async (e) => {
      e.preventDefault();
        try {

            await axios.post("http://localhost:5500/checkusers", { UserGivenEmail: UserEmail, UserGivenPassword: UserPassword }, { withCredentials: true }).then((res) => {
                alert("User Verified Successfully");
                console.log(res.data);
            }).catch((err) => {
                alert(`${err} is occured`);
            })

        } catch (err) {
            alert(`${err} is Occured`)
        }


    }


    return (
        <>

            <div id='Faltudiv' style={{ display: "block", margin: "auto", border: "1px solid black", width: "300px", marginTop: "70px" }}>

                <h3>Login</h3>

                <br />

                <form >

                    <label htmlFor="email" id='f3'>Email</label>
                    <input type="email" id="email" name="email" required onChange={(e) => { setUserEmail(e.target.value) }} value={UserEmail} />

                    <label htmlFor="major" id='f4'>Password</label>
                    <input type="password" id="major" name="major" required onChange={(e) => { setUserPassword(e.target.value) }} />

                    <div style={{ display: "block", margin: "auto", width: "fit-content", textAlign: "center", textDecoration: "none" }}>

                        <button onClick={SendUserLogin}>Login</button>
                        <Link to="/signup" style={{ textDecoration: "none", color: "black", listStyle: "none" }}><h4>Register</h4></Link>

                    </div>

                </form>
            </div>
        </>
    )
}

export default Login