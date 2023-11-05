import '../CSS/Footer.css'; 
import medimern from'../Images/MediMERN.png'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-left">
                    <img src={medimern} alt="Company Logo" className="company-logo" />
                </div>
                <div className="footer-right">
                    <div className="contact-info">
                        <h3>Contact Us</h3>
                        <p>Email:atharv.mali21@vit.edu</p>
                        <p>Phone:+91 8275566301</p>
                    </div>
                    <div className="footer-features">
                        <h3>About</h3>
                        <ul>
                            <li>Adress</li>
                            <li>Location</li>
                            <li>+91 10000000</li>
                            
                        </ul>
                    </div>
                    <div className="footer-resources">
                        <h3>Resources</h3>
                        <ul>
                            <li>Message from Desk</li>
                            <li>Departments</li>
                            
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2023 HealthBook. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
