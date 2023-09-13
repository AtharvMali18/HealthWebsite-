import '../Components/Navbar.css';
import { Link } from 'react-router-dom';


const Navbar = () => {

    return (

        <nav className="navbar">
            <div className="logo">
                <img src={"https://th.bing.com/th/id/OIP.LBIRi-LS4nu4tRt6PTC5ywHaHa?w=176&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"} alt="Logo" />
                <span className="logo-text">HealthBook</span>

            </div>

            <ul className="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
                <li></li>
            </ul>
            <div className='But'></div>


            <Link to="/signup"><button className="connect-button but2" id='munde' >SignUp</button></Link>
            <Link to="/Login"><button className="connect-button but2" id='munde' >Login</button></Link>
        </nav>
    );

};

export default Navbar;
