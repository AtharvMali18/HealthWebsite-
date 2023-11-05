import "../CSS/Navbar.css"
import Logo from '../Images/MediMERN.png'
import { NavLink as Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <nav className="navbar">
            <div className="logo">
                <img src={Logo} alt="Logo" />
                <span className="logo-text" id="l">MediMERN</span>
            </div>
            <ul className="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Gallery</a></li>
                <li><a href="#">Help</a></li>
            </ul>
        </nav>
    );

};

export default Navbar;