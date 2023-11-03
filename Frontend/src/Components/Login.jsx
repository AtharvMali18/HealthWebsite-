import { Link, useNavigate } from 'react-router-dom';
import '../CSS/Login.css';
import { useState, useContext } from 'react';
import axios from 'axios';
import { UserContext } from './Context';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Login = () => {

    const [UserEmail, setUserEmail] = useState("")
    const [UserPassword, setUserPassword] = useState("")
    const { setUser, AuthenticatePerson } = useContext(UserContext);
    const Navigator = useNavigate();

    const LoginUser = async (e) => {
        e.preventDefault();

        try {

            axios.post("http://localhost:5500/checkusers", { UserGivenEmail: UserEmail, UserGivenPassword: UserPassword }, { withCredentials: true }).then((res) => {
                if (res.data === "No User Registered") {
                    toast.error(`☠️ No User Registered `, {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                } else {
                    setUser(res.data);
                    AuthenticatePerson();
                    toast.success('😊 Login Successful', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                    setTimeout(() => {
                        Navigator('/patient');
                    }, 6000)
                }
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
        }

    }


    return (
        <>
            <div className="Div-clog">
                <form className="formlog">
                    <span id="login-lablelog">Login</span>

                    <input className="inputlog" type="email" placeholder="Email" onChange={(e) => {
                        setUserEmail(e.target.value);
                    }} value={UserEmail} />

                    <input className="inputlog" type="password" placeholder="PassWord" onChange={(e) => { setUserPassword(e.target.value) }} value={UserPassword} />

                    <button id="btnlog" onClick={LoginUser}>Submit</button>

                    <Link to="/signup" style={{ listStyle: "none", textDecoration: "none" }}><p style={{ color: "whitesmoke", fontWeight: "bolder", fontSize: '20px' }}>Dont Have Account??</p></Link>

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
    )
}

export default Login