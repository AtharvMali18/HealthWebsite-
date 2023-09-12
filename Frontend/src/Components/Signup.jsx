import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import '../Components/Signup.css';
// Import the CSS file for Signup component

const Signup = () => {


  const disableBorderReact = () => {
    const f1 = document.getElementById('f11');
    const f2 = document.getElementById('f12');
    const f3 = document.getElementById('f13');
    const f4 = document.getElementById('f14');

    f1.style.boxShadow = "none";
    f2.style.boxShadow = "none";
    f3.style.boxShadow = "none";
    f4.style.boxShadow = "none";
    f1.style.background = "none";
    f2.style.background = "none";
    f3.style.background = "none";
    f4.style.background = "none";
  }

  useEffect(() => {
    disableBorderReact();
  }, []);

  return (
    <>
      <div id="faltu2" className="signup-container">
        <h3>Signup</h3>
        <form>
          <div style={{display:"flex",flexDirection:"row",justifyContent:"space-evenly" , padding:"10px 20px "}}>
          <label htmlFor="fname" id="f11">First Name:</label>
          <input type="text" id="name"  style={{marginLeft:"20px"}}/><br />
  
          </div>
          <div  style={{display:"flex",flexDirection:"row",justifyContent:"space-evenly" , padding:"10px 20px "}}>
          <label htmlFor="lname" id="f12">Last Name:</label>
          <input type="text" id="name" style={{marginLeft:"30px"}} required />
          </div>

          <div style={{display:"flex",flexDirection:"row",justifyContent:"space-evenly" , padding:"10px 20px "}}>
          <label htmlFor="email" id='f13' >Email</label>
          <input type="email" id="email"   required />
          </div>
          <div style={{display:"flex",flexDirection:"row",justifyContent:"space-evenly" , padding:"10px 20px "}}>
          <label htmlFor="Adress" id='f14'>Password</label>
          <input type="password" id="major"   required />
          </div>
          
          
          
          <div className="button-container">
            <Link to="/patient" className="register-button">
              Register
            </Link>
            <Link to="/login" className="login-link">
              Login
            </Link>
          </div>
        </form>
      </div>
      

    </>
  );
}

export default Signup;
