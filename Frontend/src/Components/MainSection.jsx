import '../CSS/Mainsection.css';
import Spline from '@splinetool/react-spline';

const MainSection = () => {
    return (
        <section className="hero" style={{ display: "block", margin: "auto", marginTop: "35px", height: "fit-content", width: "fit-content", justifyItems: 'center', alignItems: 'center' ,overflow:"hidden"}}>
           <Spline scene="https://prod.spline.design/1xB4ngBy9SHSUlJP/scene.splinecode" style={{marginTop:"-50px"}} />
        </section>
    );
};

export default MainSection;