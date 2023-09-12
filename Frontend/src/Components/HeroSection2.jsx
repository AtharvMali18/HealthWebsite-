import '../Components/HeroSection2.css';
import Spline from '@splinetool/react-spline';

const HeroSection2 = () => {
    return (
        <section className="second-hero">
            <div className="second-hero-content">
                <h1 className="second-hero-title"></h1>
                <div className="second-hero-container">
                    <div className="second-hero-image">
                        {/* <img src="https://th.bing.com/th?id=OIP.IjRDLMtj-ItVsVlUb-F_1gHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="" /> */}
                        <img src="https://tse3.mm.bing.net/th?id=OIP.TldU16oqvfYHNF4ali8BHgHaHa&pid=Api&P=0&h=180" alt="" />

                        {/* <Spline scene="https://prod.spline.design/d36DR4VEYOTU5laL/scene.splinecode" /> */}

                    </div>
                    <div className="second-hero-text">
                        <h2 className="second-hero-content-title">Health is not valued till sickness comes</h2>
                        <p className="second-hero-content-text">Maintaining good health is essential for a fulfilling life. By making wise lifestyle choices, such as eating a balanced diet, engaging in regular physical activity, getting enough sleep, and managing stress effectively,</p>

                        {/* <button id='but'>Start</button> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection2;
