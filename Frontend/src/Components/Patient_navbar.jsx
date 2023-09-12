import '../Components/patient_navbar.css';
import { Link } from 'react-router-dom';

const Patient_navbar = () => {
    return (
        <nav>
            <div className="logo">
                <img src="https://th.bing.com/th/id/OIP.LBIRi-LS4nu4tRt6PTC5ywHaHa?w=176&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
            </div>
            <ul className="nav-links1">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Profile">Profile</Link>
                </li>
                <li>
                    <Link to="/settings">Settings</Link>
                </li>
                <li>
                    <Link to="/logout">Logout</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Patient_navbar;
