import React from 'react'
import '../Components/Profile.css';

const Profile = () => {
  return (
    <>
    <div className="navbar-top">
        <div className="title">
            <h1>Profile</h1>
        </div>
    </div>
   
    <div className="main">
        <h2>Personal information </h2>
        <div className="card">
            <div className="card-body">
                <i className="fa fa-pen fa-xs edit"></i>
                <table>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>:</td>
                            <td>Atharv Mali</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>:</td>
                            <td>atharv@gmail.com</td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            <td>:</td>
                            <td>Pune ,India</td>
                        </tr>
                        <tr>
                            <td>Phone numer</td>
                            <td>:</td>
                            <td>8275566301</td>
                        </tr>
                        <tr>
                            <td>Pervious HealthBackground </td>
                            <td>:</td>
                            <td><a href="">click here</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>        
    </div>
   
    </>
  )
}

export default Profile