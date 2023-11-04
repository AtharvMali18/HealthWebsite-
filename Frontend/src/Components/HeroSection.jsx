import '../CSS/HeroSection.css';
import Spline from '@splinetool/react-spline';

const HeroSection = () => {

    return (
        <>
            <h2 className="heading-style-h1">Come And Explore!!</h2>
            <section className="hero">
                <div className="hero-content">
                    <h1>HealthRise: Get Paid For Your Daily Activities</h1>
                    <p className='newp'>Havent You Explored?? Just Get Up From Bed and Explore the Newer Technologies</p>
                </div>

                <div className="hero-image">
                    <Spline scene="https://prod.spline.design/x9vl2HYYPfBXZZ2i/scene.splinecode" style={{ marginLeft: "70px" }} />
                </div>
            </section>
        </>

    );
};

export default HeroSection;