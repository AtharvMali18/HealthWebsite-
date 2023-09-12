import '../Components/HeroSection.css';
import Spline from '@splinetool/react-spline';

const HeroSection = () => {

    return (
        <section className="hero">
            <div className="hero-content">
                <h1>HealthBook </h1>
                <p className='newp'>Your Trusted Healthcare Appointment Booking Platform
                    At HealthBook</p>
                {/* <button className="hero-button but2">Get Started</button> */}
            </div>

            <div className="hero-image">
                <img src="https://th.bing.com/th/id/OIP.LBIRi-LS4nu4tRt6PTC5ywHaHa?w=176&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
                
            </div>
        </section>
    );
};

export default HeroSection;